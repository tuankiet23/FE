import { RouterModule } from '@angular/router';
import { ListJeComponent } from './components/admin/list-je/list-je.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// import { ListUserComponent } from './components/admin/list-user/list-user.component';
// import { ListJeComponent } from './components/admin/list-JE/list-user.component';
import { FogotPassComponent } from './components/authen/fogot-pass/fogot-pass.component';
import { EditJeComponent } from './components/admin/edit-je/edit-je.component';
import { AddJEComponent } from './components/admin/add-je/add-je.component';
// import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './routing/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


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
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Interceptor } from './interceptor';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routing/app-routing.module';

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
    ChangePasswordComponent,
    AddJEComponent,
    EditJeComponent,
    FogotPassComponent,
    ListJeComponent,
    FogotPassComponent

    // ListUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    BrowserAnimationsModule,
    // BrowserAnimationsModule,

  ],
  providers: [JobService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
