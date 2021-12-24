import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { job } from 'src/app/models/job';
import { HomeUserService } from 'src/app/services/home-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modjob:number = 0;
  startrow:number = 0;
  pagesize: number = 20;
  endrow:number =0;
  endrowDaedLine =0;
  endrowHeightSalary =0;
  endrowNewJob =0;
  jobNewPublic : any;
  jobHeightSalary : any;
  jobDeadLine : any;
  modSalary =1;
  modNewJob =0;
  modDeadLine=2;
  newjob:job[];

  constructor(private homeUserService : HomeUserService)  {
    // this.modjob = 0;
    // this.startrow= 0;
    // this.pagesize = 20;
    // this.endrow =0;
    // this.endrowDaedLine =20;
    // this.endrowHeightSalary =20;
    // this.endrowNewJob =20


   }


  ngOnInit(): void {

    this.getbody();
  //  this.jobHeightSalary =  this.getjobHomePage(1,0,20);
  //  console.log(this.jobHeightSalary);
  //  this.jobDeadLine =  this.getjobHomePage(2,0,20);
  //  console.log(this.jobDeadLine);
  }
  getbody(){
    this.getjobHomePage(0,0,20);
    console.log(this.newjob);
  }

  public getjobHomePage(modjob: number, startrow:number, endrow:number): void{
    this.homeUserService.getJob(modjob, startrow,endrow ).subscribe(
      (Response: job[] )=>{
          this.newjob = Response;
          console.log(this.newjob);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  showmoreJobDeadLineOnclick(){
    console.log("is deadline");
    this.modjob = this.modDeadLine, this.endrowDaedLine +=this.pagesize
    this.getjobHomePage(this.modjob, this.startrow,this.endrowDaedLine);
  }
  showmoreJobHeightSalaryOnclick(){
    console.log("is salary");
    this.modjob = this.modSalary, this.endrowHeightSalary +=this.pagesize
    this.getjobHomePage(this.modjob, this.startrow,this.endrowHeightSalary);
  }
  showmoreJobNewJobsOnclick(){
    console.log("is new job");
    this.modjob = this.modNewJob, this.endrowNewJob +=this.pagesize
    this.getjobHomePage(this.modjob, this.startrow,this.endrowNewJob);
  }

}
