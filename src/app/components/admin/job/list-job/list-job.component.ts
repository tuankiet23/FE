import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit {

  public job: any;
  public jobs: job[];
  searchForm: FormGroup = this.FB.group({
    jobName: new FormControl(""),
    salaryMax: new FormControl(""),
    salaryMin: new FormControl(""),
  })
  constructor( 
    public jobService: JobService,
    public FB: FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.onSearchJob();
  }

  onSearchJob() {
    this.jobService.getSearchJob(this.searchForm.value, this.currentPage, this.pageSize).subscribe(
      res => {
        this.jobs = res;
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
    this.job.paginator = this.paginator;
  }

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.onSearchJob();
  }

}
