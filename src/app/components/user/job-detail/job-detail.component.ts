import { Component, OnInit } from '@angular/core';
import { job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
import { TransfereServiceService } from 'src/app/services/transfere-service.service';


@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  [x: string]: any;

  public job: any ;

  constructor(private jobService: JobService,
   private route: Router, private activeRouter : ActivatedRoute
   , private transfereService :TransfereServiceService) { }

  ngOnInit(): void {
    this.getJobById();
  }

  public getJobById(): void{
  const id= this.activeRouter.snapshot.params['id'];
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
  applyJobNow(){
    var datatransfer: any = {
        'username': localStorage.getItem("username"),
        'jobid':this.activeRouter.snapshot.params['id']
    };
      console.log("is click apply button");
      this.transfereService.setData(datatransfer);
      this.route.navigate(['/popup-applyjob']);
      // Chec
      // check token xem da login chua
          //1. Neu chua login thi quay ra trang login, sau khi login xong thi nhay luon poppup
          //2. Neu dax login thi nhay luon popup
          // this.route.navigate(['/recruitment']);
        //   if(this.checkLogin()){
        //     // goi puppup ung tuyen
        //     this.route.navigate(['/recruitment']);
        //   }
        // this.route.navigate(['/authen/login']);
  }
  checkLogin(){
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (token) return true;
    return false;
  }


}
