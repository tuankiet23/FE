import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jobregister } from 'src/app/models/job-register';
import { JobRegisterService } from 'src/app/services/job-register.service';

@Component({
  selector: 'app-detail-job-register',
  templateUrl: './detail-job-register.component.html',
  styleUrls: ['./detail-job-register.component.css']
})
export class DetailJobRegisterComponent implements OnInit {

  [x: string]: any;

  public jobregisterps: any ;

  constructor(private jobRegisterService: JobRegisterService,
   private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getJobRegisterById();
    
  }
  public getJobRegisterById(): void{
  const id= this.route.snapshot.params['id'];
    this.jobRegisterService.getJobRegisterById(id).subscribe(
      res=>{
        if(res == null) {
          res == ""
        }
        this.jobregisterps=res;
         console.log(res);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

}
