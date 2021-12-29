import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { MatDialog } from '@angular/material/dialog';
import { addjobregister } from 'src/app/models/addjobregister';
import { JobRegisterService } from 'src/app/services/job-register.service';
import { __values } from 'tslib';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-edit-job-register',
  templateUrl: './edit-job-register.component.html',
  styleUrls: ['./edit-job-register.component.css'],
})
export class EditJobRegisterComponent implements OnInit {

  editForm: FormGroup = this.FB.group({
    id: new FormControl(""),
    dateinterview: new FormControl(""),
    methodinterview: new FormControl(""),
    reason: new FormControl(""),

  }, {
    updateOn: 'blur'
  });

  public jobregisterps: any;
  public addjr: addjobregister;
  private cvFileName: string;

  constructor(
    private jobRegisterService: JobRegisterService,
    private route: ActivatedRoute,
    public FB: FormBuilder,
    private router: Router

  ) {
   }


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
        this.cvFileName = this.getCvFileName(this.jobregisterps.jobRegister.cv);
        this.editForm.patchValue({
          id:this.jobregisterps.jobRegister.id,
          dateinterview:formatDate(  this.jobregisterps.jobRegister.dateInterview , 'yyyy-MM-dd', 'en-Us' ) ,
          dateregister:formatDate(  this.jobregisterps.jobRegister.dateRegister, 'yyyy-MM-dd', 'en-Us' ) ,
          methodinterview: this.jobregisterps.jobRegister.methodInterview,
          reason:this.jobregisterps.jobRegister.reason,
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
      }

    );
    this.router.navigate(['/admin/jobregister']);
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

  onDownloadCV(id: any) {
    this.jobRegisterService.dowloadcv(id).subscribe(

      blod => saveAs(blod, this.cvFileName)
    );
  }


  getCvFileName(cvFilePath: string) {
    if (!cvFilePath) {
      console.error("File path is null or undefined")
    }
    let cvFilePaths = cvFilePath.split("/");
    return cvFilePaths[cvFilePaths.length - 1];
  }

  onRefuse(){
      this.addjr=this.editForm.value;
      this.addjr.profilestatus="5";
      this.addjr.dateinterview="";
      this.jobRegisterService.updateJobRegist(this.addjr).subscribe(
        res => {
        console.log(this.addjr);
        },
      );
      this.router.navigate(['/admin/jobregister']);
      this.closePopup1();
      this.getJobRegisterById();
  }

  onBrowsing(){
    this.addjr=this.editForm.value;
    this.addjr.profilestatus="2";
    this.addjr.dateinterview="";
    this.jobRegisterService.updateJobRegist(this.addjr).subscribe(
      res => {
      console.log(this.addjr);
      },
    );
    this.router.navigate(['/admin/jobregister']);
    this.closePopup1();
    this.getJobRegisterById();
  }

  onRecruit(){
    this.addjr=this.editForm.value;
    this.addjr.profilestatus="4";
    this.addjr.dateinterview="";
    console.log("đsfds", this.addjr);
    this.jobRegisterService.updateJobRegist(this.addjr).subscribe(
      res => {
      console.log(this.addjr);
      },
    );
    this.router.navigate(['/admin/jobregister']);
    this.closePopup1();
    this.getJobRegisterById();
  }

  onSchedule(){
    this.addjr=this.editForm.value;
    this.addjr.profilestatus="3";
    console.log("đff",this.addjr);
    this.jobRegisterService.updateJobRegist(this.addjr).subscribe(
      res => {
      console.log(this.addjr);
      },
    );
    this.router.navigate(['/admin/jobregister']);
    this.closePopup1();
    this.getJobRegisterById();
  }


  licensed = "none";
  openCombobox(){
    this.licensed="block";
  }
  closeCombobox(){
    this.licensed="none";
  }

  displayStyle = "none";
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  displayStyle1 = "none";
  openPopup1() {
    this.displayStyle1 = "block";
  }
  closePopup1() {
    this.displayStyle1 = "none";
  }

}
