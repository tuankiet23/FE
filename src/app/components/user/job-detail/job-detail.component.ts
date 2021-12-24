import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  [x: string]: any;

  public job: any ;

  constructor(private jobService: JobService,
   private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getJobById();

  }
  public getJobById(): void{
  const id= this.route.snapshot.params['id'];
    this.jobService.getJobById(id).subscribe(
      (Response: job )=>{
        this.job=Response;
         console.log(this.job);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

}
