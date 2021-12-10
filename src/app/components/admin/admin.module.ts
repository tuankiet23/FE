import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { ListJobregisterComponent } from './list-jobregister/list-jobregister.component';
import { ListUserComponent } from './list-user/list-user.component';
import { CompanyAdComponent } from './company-ad/company-ad.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { HomeAdComponent } from './home-ad/home-ad.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { FooterAdComponent } from './footer-ad/footer-ad.component';
import { ListJobAdComponent } from './list-job-ad/list-job-ad.component';
import { HeaderAdComponent } from './header-ad/header-ad.component';


const Adminroutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path:'',
        component: HomeAdComponent,
        pathMatch:'full'
      },
      {
        path:'job',
        component: ListJobAdComponent,
        pathMatch:'full'
      },
      {
        path:'job/create',
        component: CreateJobComponent,
        pathMatch:'full'
      },
      {
        path:'user',
        component: ListUserComponent,
        pathMatch:'full'
      },
      {
        path:'user/create',
        component: CreateUserComponent,
        pathMatch:'full'
      },
      {
        path:'jobregister',
        component: ListJobregisterComponent,
        pathMatch:'full'
      },
      {
        path:'company',
        component: CompanyAdComponent,
        pathMatch:'full'
      },
      {
        path:'company/create',
        component: CreateCompanyComponent,
        pathMatch:'full'
      },
    ]
  },
]

@NgModule({
  declarations: [
    AdminComponent,
    HeaderAdComponent,
    SidebarComponent
  ],
  imports: [
    RouterModule.forChild(Adminroutes),
  ],
  exports: [RouterModule],
})
export class AdminModule { }
