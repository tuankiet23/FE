import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { addjobregister } from 'src/app/models/addjobregister';
import { JobRegisterService } from 'src/app/services/job-register.service';
import { __values } from 'tslib';


@Component({
  selector: 'app-edit-job-register',
  templateUrl: './edit-job-register.component.html',
  styleUrls: ['./edit-job-register.component.css']
})
export class EditJobRegisterComponent implements OnInit {

  editForm: FormGroup = this.FB.group({
    id: new FormControl(""),
    profilestatus: new FormControl(""),
    dateregister: new FormControl(""),
    dateinterview: new FormControl(""),
    methodinterview: new FormControl(""),
    cv: new FormControl(""),
  }, {
    updateOn: 'blur'
  });

  public jobregisterps: any;


  constructor(
    private jobRegisterService: JobRegisterService,
    private route: ActivatedRoute,
    public FB: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getJobRegisterById();
  }


  public getJobRegisterById(): void {
    const id = this.route.snapshot.params['id'];
    this.jobRegisterService.getJobRegisterById(id).subscribe(
      res => {
        if (res == null) {
          res == ""
        }
        this.jobregisterps = res;
        this.editForm.patchValue({
          id:this.jobregisterps.jobRegister.id,
          dateinterview:formatDate(  this.jobregisterps.jobRegister.dateInterview , 'yyyy-MM-dd', 'en-Us' ) ,
          dateregister:formatDate(  this.jobregisterps.jobRegister.dateRegister, 'yyyy-MM-dd', 'en-Us' ) ,
          methodinterview: this.jobregisterps.jobRegister.methodInterview,
          // profilestatus: this.jobregisterps.profileStatus.name
        })
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  onUpdateJobRegister() {
    this.jobRegisterService.updateJobRegist(this.editForm.value).subscribe(  
      res => {
      console.log(this.editForm.value);
      this.router.navigate(['/admin/jobregister']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log(this.editForm.value);
      }
    );
  }

  onDeleteJobRegister(id: any) {
    this.jobRegisterService.delete(id).subscribe(
      res => {
        this.router.navigate(['/admin/jobregister']);
      },
      (error: HttpErrorResponse) => {
        // alert(error.message);
        this.router.navigate(['/admin/jobregister']);
      }
    );
  }

  onDowloadCV(id:any){
    this.jobRegisterService.dowloadcv(id).subscribe(
      res => {
        alert("Dowlaod CV thành công.");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
