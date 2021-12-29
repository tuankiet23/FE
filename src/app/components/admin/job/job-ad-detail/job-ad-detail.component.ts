import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-ad-detail',
  templateUrl: './job-ad-detail.component.html',
  styleUrls: ['./job-ad-detail.component.css']
})
export class JobAdDetailComponent implements OnInit {
  public job: any;

  constructor(
    public jobService: JobService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getJobById();
  }

  public getJobById(): void {
    const id = this.route.snapshot.params['id'];
    this.jobService.getJobAd(id).subscribe(
      res => {
        this.job = res;
        console.log(res);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
