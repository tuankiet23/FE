import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { jobregister } from 'src/app/models/job-register';
import { JobRegisterService } from 'src/app/services/job-register.service';

@Component({
  selector: 'app-list-job-register',
  templateUrl: './list-job-register.component.html',
  styleUrls: ['./list-job-register.component.css']
})
export class ListJobRegisterComponent implements OnInit {

  public jobregisters: Array<any>=[];
  public jobregister: any;
  constructor(private jobregisterService:JobRegisterService) { }

  ngOnInit(): void {
      this.getJobRegister();
  }
  public getJobRegister(): void{
    this.jobregisterService.getJobRegister().subscribe(
      res=>{
        if(res === null) {
          res == ''
        }
        this.jobregisters=res;
         console.log(res);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  onDeleteJobRegister(id: any) {
    this.jobregisterService.delete(id).subscribe(
      res => {
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.getJobRegister();
      }
    );
  }

}
