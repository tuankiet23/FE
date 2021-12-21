import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { jobregister } from 'src/app/models/job-register';
import { JobRegisterService } from 'src/app/services/job-register.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { searchJobRegister } from 'src/app/models/jobregister/searchjobregister';

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
    public FB: FormBuilder) { }

  totalRecord: number = 0;
  pageN: number = 0;
  pageS: number = 1;
  page?: number;

  ngOnInit(): void {
    this.getJobRegister();
  }
  public getJobRegister(): void {

    this.jobregisterService.getJobRegister().subscribe(
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
    this.jobregisterService.getSearchJobRegister(this.searchForm.value).subscribe(
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

  pageChanged(event: PageChangedEvent): void {
    this.pageN = event.page - 1;
    console.log("pageN " + this.pageN);
    this.jobregisterService.getAllJobregister(this.pageN, this.pageS).subscribe(res => {
      this.jobregisters = res;
      console.log(res);
    })
  }
}
