import { Component, OnInit } from '@angular/core';
import { job } from '../../../models/job';
import { JobService } from '../../../services/job.service';

@Component({
  selector: 'app-list-job-ad',
  templateUrl: './list-job-ad.component.html',
  styleUrls: ['./list-job-ad.component.css']
})
export class ListJobAdComponent implements OnInit {
jobs : job;
  constructor(private JobService : JobService) { }

  ngOnInit(): void {
    this.JobService.getJob().subscribe((data) =>{
      console.log(data);

    });
  }

}
