import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeUserService } from 'src/app/services/home-user.service';
// import { HomeUserService } from 'src/app/services/home-user.service';
import { JobModel } from './JobModel';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  datas: JobModel[]=[];

  modjob:number = 0;
  startrow:number = 0;
  pagesize: number = 1;
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

  constructor(
    private homeUserService : HomeUserService,
    )  {
    this.modjob = 0;
    this.startrow= 0;
    this.pagesize = 1;
    this.endrow =0;
    this.endrowDaedLine =1;
    this.endrowHeightSalary =1;
    this.endrowNewJob =1


   }


  ngOnInit(): void {
   this.getbody();
  //  this.jobHeightSalary =  this.getjobHomePage(1,0,20);
  //  console.log(this.jobHeightSalary);
  //  this.jobDeadLine =  this.getjobHomePage(2,0,20);
  //  console.log(this.jobDeadLine);
  }
  getbody(){
    // debugger;
    this.getjobHomePage(0,0,1);
    console.log(this.datas);
  }

  public getjobHomePage(modjob: number, startrow:number, endrow:number){
    // debugger;
    this.homeUserService.getJob(modjob,startrow, endrow ).subscribe((response) => {
    this.datas = response;
      // this.dataSource = new MatTableDataSource<Employee>(data);
      console.log(this.datas);
    })
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
