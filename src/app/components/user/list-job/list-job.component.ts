import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { JobService } from 'src/app/services/job.service';
import { job } from 'src/app/models/job';
@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit {

  public jobs: Array<any>=[];
  constructor(private jobService:JobService) { }

  ngOnInit(): void {
    this.getJob();
  }
  public getJob(): void{
    this.jobService.getJob().subscribe(
      (Response: job[] )=>{
        this.jobs=Response;
         console.log(this.jobs);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
}
