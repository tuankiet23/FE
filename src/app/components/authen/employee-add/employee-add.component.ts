import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../../models/employee';
// import { EmployeeComponent } from './../employee/employee.component';
import { DataService } from 'src/app/services/data.service';


// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Component, OnInit } from '@angular/core';

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';


@Component({
  selector: 'app-user-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['employee-add.component.css'],
})
export class EmployeeAddComponent implements OnInit {
  // exform: FormGroup;
  addUser!: FormGroup;
  employee: Employee;
  btnDisable = false;
  url = 'http://localhost:8080/signup';
    constructor(private rest: EmployeeService, private data: DataService, private Fb: FormBuilder,private router: Router) {

  }

  ngOnInit() {
    this.initForm();
  }
  validate() {
    return true;
  }
  public initForm() {
    this.addUser = this.Fb.group({
      fullName: new FormControl('',[Validators.required,Validators.minLength(6)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      userName: new FormControl('',[Validators.required,Validators.minLength(5)]),
      password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
      phoneNumber: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]),
      homeTown: new FormControl('',[Validators.required]),
      gender: new FormControl(''),
      birthDay: new FormControl('',[Validators.required]),
    });
  }
  save() {
    this.btnDisable = true;
    console.log(this.addUser.value);

    this.rest.addUser(this.addUser.value).subscribe((data) => {
     alert('đăng kí thành công! Vui lòng check mail và xác nhận.');
      this.data.success('Employee is save');
      this.router.navigate(['/login'])
      this.btnDisable = false;
    });
  }
  get fullName() { return this.addUser.get('fullName'); }
  get birthDay() { return this.addUser.get('birthDay'); }
  get email() { return this.addUser.get('email'); }
  get homeTown() { return this.addUser.get('homeTown'); }
  get phoneNumber() { return this.addUser.get('phoneNumber'); }
  get gender() { return this.addUser.get('gender'); }
  get password() { return this.addUser.get('skill'); }
  get userName() { return this.addUser.get('numberYearsExperience'); }
}
