import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { JobRegisterService } from 'src/app/services/job-register.service';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { searchJobRegister } from 'src/app/models/jobregister/searchjobregister';
import { addjobregister } from 'src/app/models/addjobregister';

import { PageEvent } from '@angular/material/paginator';
import { formatDate } from '@angular/common';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-list-job-register',
  templateUrl: './list-job-register.component.html',
  styleUrls: ['./list-job-register.component.css']
})
export class ListJobRegisterComponent implements OnInit {
  searchForm: FormGroup = this.FB.group({
    fullName: new FormControl(""),
    jobName: new FormControl(""),
    phoneNumber: new FormControl(""),
    dateRegister: new FormControl(""),
    dateInterview: new FormControl(""),

  })

  private cvFileName: string;

  public searchJR: searchJobRegister;
  public jobjr: addjobregister;
  public jobregisterps: any;

  showDirectionLinks = true;
  public jobregisters: Array<any> = [];
  public jobregister: any;
  constructor(
    private jobregisterService: JobRegisterService,
    public FB: FormBuilder) {
  }

  ngOnInit(): void {
    this.onSearchJobRegister();
  }
  public getJobRegister(): void {

    this.jobregisterService.getJobRegister(this.currentPage, this.pageSize).subscribe(
      res => {
        if (res === null) {
          res == ''
        }
        this.jobregisters = res;
        console.log(res);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  onSearchJobRegister() {
    this.jobregisterService.getSearchJobRegister(this.searchForm.value, this.currentPage, this.pageSize).subscribe(
      res => {
        this.jobregisters = res;
        console.log(this.searchForm.value);
        console.log(res);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  isLoading = false;
  totalRows = 3;
  pageSize = 1;
  currentPage = 1;
  pageSizeOptions: number[] = [1, 10, 25, 100];
  @ViewChild(MatPaginator)
  paginator!: any;
  ngAfterViewInit() {
    this.jobregister.paginator = this.paginator;
  }

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.onSearchJobRegister();
  }

  displayStyle = "none";
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  licensed = "none";
  openCombobox() {
    this.licensed = "block";
  }
  closeCombobox() {
    this.licensed = "none";
  }

  editForm: FormGroup = this.FB.group({
    id: new FormControl(""),
    dateinterview: new FormControl(""),
    methodinterview: new FormControl(""),
  }, {
    updateOn: 'blur'
  });


  onUpdateJobRegister() {
    this.jobregisterService.updateJobRegist(this.editForm.value).subscribe(
      res => {
        console.log(this.editForm.value);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log(this.editForm.value);
      }
    );
  }

  onDownloadCV(id: any) {
    this.jobregisterService.getJobRegisterById(id).subscribe(
      res => {
        this.jobregisterps = res;
        this.cvFileName = this.getCvFileName(this.jobregisterps.jobRegister.cv);})

    this.jobregisterService.dowloadcv(id).subscribe(
      blod => saveAs(blod, this.cvFileName)
    );
  }


  getCvFileName(cvFilePath: string) {
    if (!cvFilePath) {
      console.error("File path is null or undefined")
    }
    let cvFilePaths = cvFilePath.split("/");
    return cvFilePaths[cvFilePaths.length - 1];
  }

  onAccept(id: String) {
    this.jobjr = this.editForm.value;
    this.jobjr.id = id;
    this.jobjr.profilestatus = '3';
    console.log(this.jobjr);

    this.jobregisterService.updateJobRegist(this.jobjr).subscribe(
      res => {
        console.log(this.jobjr);
        this.displayStyle = "none";
      },
    );
    this.displayStyle = "none";
  }

}
function MatPaginator(MatPaginator: any) {
  throw new Error('Function not implemented.');
}

