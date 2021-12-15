import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../../models/employee';
// import { EmployeeComponent } from './../employee/employee.component';
import { DataService } from 'src/app/services/data.service';


import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['employee-add.component.css'],
})
export class EmployeeAddComponent implements OnInit {
  // exform: FormGroup;
  employee: Employee;
  btnDisable = false;
  url = 'http://localhost:8080/signup';
  constructor(private rest: RestApiService, private data: DataService) {

  }

  ngOnInit() {
    // this.exform = new FormGroup({
    //   fullName: new FormControl(null,Validators.required),
    //   email: new FormControl(null,[Validators.required,Validators.email]),
    //   userName: new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    //   password: new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
    //   phone: new FormControl(null,[Validators.required,Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')]),
    //   homeTown: new FormControl(null,[Validators.required,Validators.maxLength(50)]),
    //   gender: new FormControl(null,Validators.required),
    //   birthDay: new FormControl(null,Validators.required),
    // })

  }


  // get f(){
  //   return this.exform.controls;
  // }
  validate() {
    return true;
  }
  save() {
    this.btnDisable = true;
    if (this.validate()) {
      this.rest
        .post(this.url, this.employee)
        .then((data) => {
          this.data.success('Employee is save');
          this.btnDisable = false;
          alert("đăng kí thành công! Vui lòng check mail và xác nhận.");
        })
        .catch((error) => {
          this.data.error(error['message']);
          this.btnDisable = false;
        });
    }
  }
}
