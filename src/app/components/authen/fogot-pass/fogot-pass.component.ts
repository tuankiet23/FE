import { Component, OnInit } from '@angular/core';
import { Employee } from './../../../models/employee';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from './../../../services/data.service';
import { RestApiService } from './../../../services/rest-api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-fogot-pass',
  templateUrl: './fogot-pass.component.html',
  styleUrls: ['./fogot-pass.component.css']
})
export class FogotPassComponent implements OnInit {

  exform: FormGroup;
  employee: Employee;
  btnDisable = false;
  url = 'http://localhost:8080/api/user/fogotpass';
  constructor(private rest: RestApiService, private data: DataService,private http:HttpClient) {
    this.employee = new Employee();
  }

  ngOnInit() {
    this.exform = new FormGroup({
      fullName: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
      userName: new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
      password: new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
      phone: new FormControl(null,[Validators.required,Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')]),
      homeTown: new FormControl(null,[Validators.required,Validators.maxLength(50)]),
      gender: new FormControl(null,Validators.required),
      birthDay: new FormControl(null,Validators.required),
    })

  }


  get f(){
    return this.exform.controls;
  }
  validate() {
    return true;
  }
  fogotPass() {
    this.btnDisable = true;
    if (this.validate()) {
      this
        .put(this.url, this.employee)
        .then((data) => {
          this.data.success('Employee is save');
          alert("Vui lòng check email để lấy lại mật khẩu!");
          this.btnDisable = false;

        })
        .catch((error) => {
          this.data.error(error['message']);
          this.btnDisable = false;
        });
    }
  }

  put(link: string,body: any){

    return this.http.put(link +'/' ,body).toPromise();
  }

}
