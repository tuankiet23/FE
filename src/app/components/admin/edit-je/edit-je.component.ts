import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from './../../../models/employee';
import { DataService } from './../../../services/data.service';
import { RestApiService } from './../../../services/rest-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-je',
  templateUrl: './edit-je.component.html',
  styleUrls: ['./edit-je.component.css'],
})
export class EditJeComponent implements OnInit {
  employee: Employee;
  editForm!: FormGroup;

  btnDisable = false;
  url = 'http://localhost:8080/api/admin/getje';
  url1 = 'http://localhost:8080/api/admin/updateJE';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private Fb: FormBuilder,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.initForm();
    this.getEmployee();
  }
  public initForm() {
    this.editForm = this.Fb.group({
      fullName: new FormControl('',[Validators.required,Validators.minLength(6)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      userName: new FormControl('',[Validators.required,Validators.minLength(5)]),
      phoneNumber: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]),
      homeTown: new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
      birthDay: new FormControl('',[Validators.required]),
    });
  }
  public getEmployee() {
    this.employeeService
      .getEmployeeById(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.editForm.patchValue({
          fullName: data.fullName,
          email: data.email,
          userName: data.userName,
          password: data.password,
          phoneNumber: data.phoneNumber,
          homeTown: data.homeTown,
          gender: data.gender,
          birthDay: data.birthDay,
        });
        console.log(data);
      });
  }

  public updateEmployee() {
    this.employeeService
      .updateJE(this.editForm.value, this.route.snapshot.params['id'])
      .subscribe((data) => {
        alert("update thanh cong")
        console.log('data', data);

      });
  }

  get f() {
    return this.editForm.controls;
  }
  get fullName() { return this.editForm.get('fullName'); }
  get birthDay() { return this.editForm.get('birthDay'); }
  get email() { return this.editForm.get('email'); }
  get homeTown() { return this.editForm.get('homeTown'); }
  get phoneNumber() { return this.editForm.get('phoneNumber'); }
  get gender() { return this.editForm.get('gender'); }
  get userName() { return this.editForm.get('numberYearsExperience'); }
}
