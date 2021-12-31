import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from './../../../models/employee';
import { DataService } from './../../../services/data.service';
import { RestApiService } from './../../../services/rest-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';



@Component({
  selector: 'app-add-je',
  templateUrl: './add-je.component.html',
  styleUrls: ['./add-je.component.css'],
})
export class AddJEComponent implements OnInit {
  employee: Employee;
  addForm!: FormGroup;

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
    this.addForm = this.Fb.group({
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
        this.addForm.patchValue({
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

  save() {
    this.btnDisable = true;
    console.log(this.addForm.value);

    this.employeeService.addJE(this.addForm.value).subscribe((data) => {
     alert('đăng kí thành công! Vui lòng check mail và xác nhận.');
      // this.data.success('Employee is save');
      this.router.navigate(['/admin/je'])
      this.btnDisable = false;
    });
  }


  get f() {
    return this.addForm.controls;
  }
  get fullName() { return this.addForm.get('fullName'); }
  get birthDay() { return this.addForm.get('birthDay'); }
  get email() { return this.addForm.get('email'); }
  get homeTown() { return this.addForm.get('homeTown'); }
  get phoneNumber() { return this.addForm.get('phoneNumber'); }
  get gender() { return this.addForm.get('gender'); }
  get userName() { return this.addForm.get('numberYearsExperience'); }
}
