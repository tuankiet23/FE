import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthenComponent } from './authen.component';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';


const AuthenRoutes: Routes = [
  {
    path: '',
    component: AuthenComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
      },
      {
        path: 'employeelist',
        component: EmployeeListComponent,
        pathMatch: 'full'
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
        pathMatch: 'full'
      },

      {
        path: 'createremployee',
        component: EmployeeAddComponent,
        pathMatch: 'full'
      },
    ],
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenRoutes),

  ]
})
export class AuthenModule { }
