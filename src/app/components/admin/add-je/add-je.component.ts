import { Router } from '@angular/router';
import { EmployeeService } from './../../../services/employee.service';
import { HttpClient } from '@angular/common/http';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Employee } from './../../../models/employee';
import { DataService } from './../../../services/data.service';
import { RestApiService } from './../../../services/rest-api.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-add-je',
  templateUrl: './add-je.component.html',
  styleUrls: ['./add-je.component.css'],
})
export class AddJEComponent implements OnInit {
  selectedValue: string;
  employee: Employee;
  addForm!: FormGroup;
  btnDisable = false;
  url = 'http://localhost:8080/api/admin/signupje';
  constructor(
    private rest: EmployeeService,
    private data: DataService,
    private http: HttpClient,
    private Fb: FormBuilder,
    private router : Router
  ) {

  }
  ngOnInit() {
    this.initForm();
  }
  public initForm() {
    this.addForm = this.Fb.group({
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
  // get f(){
  //   return this.exform.controls;
  // }
  saveJE() {
    this.btnDisable = true;
    console.log(this.addForm.value);

    this.rest.addJE(this.addForm.value).subscribe((data) => {
     alert('đăng kí thành công! Vui lòng check mail và xác nhận.');
     this.router.navigate(['/admin/je'])
      this.data.success('Employee is save');
      this.btnDisable = false;
    });
  }



  // validate() {
  //   return true;
  // }
  post(link: string, body: any) {
    // let headers = this.getHeaders();
    // if(headers instanceof HttpHeaders)
    // return this.http.post(link,body,{headers:headers}).toPromise();
    return this.http.post(link, body).toPromise();
  }
  get fullName() { return this.addForm.get('fullName'); }
  get birthDay() { return this.addForm.get('birthDay'); }
  get email() { return this.addForm.get('email'); }
  get homeTown() { return this.addForm.get('homeTown'); }
  get phoneNumber() { return this.addForm.get('phoneNumber'); }
  get gender() { return this.addForm.get('gender'); }
  get password() { return this.addForm.get('skill'); }
  get userName() { return this.addForm.get('numberYearsExperience'); }
}
