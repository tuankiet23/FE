import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeUserService } from 'src/app/services/home-user.service';
// import { HomeUserService } from 'src/app/services/home-user.service';
import { JobModel } from './JobModel';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  datasJobHeightSalary: JobModel[]=[];
  datasJobNew: JobModel[]=[];
  datasJobDeadLine: JobModel[]=[];
  datasAll: JobModel[]=[];


  firstPage:number = 1;
  pagesize: number = 20;
  pagesizeAll: number = 1;
  pagesizeSalary: number = 1;
  pagesizeNewJob: number = 1;
  pagesizeDeadLine: number = 1;
  // endrowDaedLine = this.startrow + this.pagesize;
  // endrowAll =this.startrow + this.pagesize;;
  // endrowHeightSalary =this.startrow + this.pagesize;;
  // endrowNewJob =this.startrow + this.pagesize;;

  modNewJob =1;
  modSalary =2;
  modDeadLine=3;
  modAll=4;

  onsearchjob: Boolean = false;

  searchJobForm : FormGroup = this.fb.group({
    jobName: new FormControl(""),
    nubmerExperence: new FormControl(""),
    jobPosition: new FormControl("")
  });

  constructor(
    private homeUserService : HomeUserService, private fb : FormBuilder
    )  {  }


  ngOnInit(): void {

      this.getModeJob(this.modAll,1,this.pagesize);
      this.getModeJob(this.modDeadLine,1,this.pagesize);
      this.getModeJob(this.modNewJob,1,this.pagesize);
      this.getModeJob(this.modSalary,1,this.pagesize);
   }

  public getModeJob(modjob: number, pageNumber:number, pageSize:number){

      this.homeUserService.getJob(modjob,pageNumber, pageSize ).subscribe((response) => {
        if(modjob == this.modSalary){
          this.datasJobHeightSalary = response;
           console.log(this.datasJobHeightSalary);
        }
         if(modjob == this.modNewJob){
          this.datasJobNew = response;
           console.log(this.datasJobNew);
        }
         if(modjob == this.modDeadLine){
          this.datasJobDeadLine = response;
           console.log(this.datasJobDeadLine);
        }
        if(modjob == this.modAll){
          this.datasAll = response;
           console.log(this.datasAll);
        }
        })

  }

  showmoreJobAllOnclick(){
    console.log("is all job");
    this.pagesizeAll = this.pagesizeAll + this.pagesize;
    this.getModeJob( this.modAll, this.firstPage,this.pagesizeAll);
    if(this.onsearchjob){
      this.homeUserService.searchJobHomePage(this.searchJobForm.value,this.firstPage,this.pagesizeAll).subscribe(
        res => {
            this.datasAll = res;
            this.onsearchjob = true;
        }
      );
    }
  }
  showmoreJobDeadLineOnclick(){
    console.log("is deadline");
    this.pagesizeDeadLine = this.pagesizeDeadLine + this.pagesize;
    this.getModeJob( this.modDeadLine, this.firstPage,this.pagesizeDeadLine);
  }
  showmoreJobHeightSalaryOnclick(){
    console.log("is salary");
    this.pagesizeSalary = this.pagesizeSalary + this.pagesize;
    this.getModeJob( this.modSalary, this.firstPage,this.pagesizeSalary);
  }
  showmoreJobNewJobsOnclick(){
    console.log("is new job");
    this.pagesizeNewJob = this.pagesizeNewJob + this.pagesize;
    this.getModeJob( this.modNewJob, this.firstPage,this.pagesizeNewJob);
  }

  searchJob(){
    console.log("is search job");
    console.log(this.searchJobForm.value);
    this.homeUserService.searchJobHomePage(this.searchJobForm.value,this.firstPage,this.pagesize).subscribe(
      res => {
          this.datasAll = res;
          this.datasJobDeadLine = res
          this.datasJobHeightSalary = res
          this.datasJobNew = res
          this.onsearchjob = true;
          console.log(this.datasAll)
      }
    );
  }




}
