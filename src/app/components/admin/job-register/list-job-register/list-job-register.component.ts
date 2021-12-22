import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { jobregister } from 'src/app/models/job-register';
import { JobRegisterService } from 'src/app/services/job-register.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { searchJobRegister } from 'src/app/models/jobregister/searchjobregister';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

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
  public searchJR: searchJobRegister;


  showDirectionLinks = true;
  public jobregisters: Array<any> = [];
  public jobregister: any;
  constructor(
    private jobregisterService: JobRegisterService,
    public FB: FormBuilder) {
     }

  ngOnInit(): void {
    // this.getJobRegister();
this.onSearchJobRegister();
  }
  public getJobRegister(): void {

    this.jobregisterService.getJobRegister( this.currentPage, this.pageSize).subscribe(
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
  paginator!: MatPaginator;
  ngAfterViewInit() {
    this.jobregister.paginator = this.paginator;
  }

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.onSearchJobRegister();
  }
}
