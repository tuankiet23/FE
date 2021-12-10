import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { LoginComponent } from './components/authen/login/login.component';
import { JobDetailComponent } from './components/user/job-detail/job-detail.component';
import { RecruitmentComponent } from './components/user/recruitment/recruitment.component';
import { ContactComponent } from './components/user/contact/contact.component';
import { ListJobComponent } from './components/user/list-job/list-job.component';
import { PersonalInfoComponent } from './components/user/personal-info/personal-info.component';


import { JobService } from './services/job.service';
import { AuthenComponent } from './components/authen/authen.component';
import { AdminComponent } from './components/admin/admin.component';
import { OtpComponent } from './components/authen/otp/otp.component';
import { ChangePasswordComponent } from './components/authen/change-password/change-password.component';
import { EmployeeAddComponent } from './components/authen/employee-add/employee-add.component';
import { EmployeeListComponent } from './components/authen/employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // FooterComponent,
    OtpComponent,
    LoginComponent,
    JobDetailComponent,
    RecruitmentComponent,
    ContactComponent,
    ListJobComponent,
    PersonalInfoComponent,
    AuthenComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    ChangePasswordComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
