import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
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
      fullName: new FormControl(''),
      email: new FormControl(''),
      userName: new FormControl(''),
      password: new FormControl(''),
      phoneNumber: new FormControl(''),
      homeTown: new FormControl(''),
      gender: new FormControl(''),
      birthDay: new FormControl(''),
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
        console.log('data', data);
        alert("update thanh cong")
      });
  }

  get f() {
    return this.editForm.controls;
  }
}
