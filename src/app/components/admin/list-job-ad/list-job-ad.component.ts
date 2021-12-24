import { Component, OnInit, ViewChild } from '@angular/core';
import { job } from '../../../models/job';
import { JobService } from '../../../services/job.service';
import { DataService } from '../../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-job-ad',
  templateUrl: './list-job-ad.component.html',
  styleUrls: ['./list-job-ad.component.css']
})
export class ListJobAdComponent implements OnInit {
jobs : any[];
  constructor(private JobService : JobService,
                      private data: DataService,
                      private http: HttpClient,
                      private Fb: FormBuilder) { }


  ngOnInit(): void {
    this.JobService.getJob().subscribe((data) =>{
      this.jobs = data;
      console.log(this.jobs);
    });
  }


  isLoading = false;
  totalRows = 3;
  pageSize = 1;
  currentPage = 1;
  pageSizeOptions: number[] = [1, 5, 10];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngAfterViewInit() {

  }

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    // this.onSearchJobRegister();
  }

}
