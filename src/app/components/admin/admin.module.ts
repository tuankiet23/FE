import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { ListJobregisterComponent } from './list-jobregister/list-jobregister.component';
import { ListUserComponent } from './list-JE/list-user.component';
import { CompanyAdComponent } from './company-ad/company-ad.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { HomeAdComponent } from './home-ad/home-ad.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { FooterAdComponent } from './footer-ad/footer-ad.component';
import { ListJobAdComponent } from './list-job-ad/list-job-ad.component';
import { HeaderAdComponent } from './header-ad/header-ad.component';
import { EditAcademiclevelComponent } from './edit-academiclevel/edit-academiclevel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddJEComponent } from './add-je/add-je.component';
import { BrowserModule } from '@angular/platform-browser';
import { EditJeComponent } from './edit-je/edit-je.component'



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
        path:'addJE',
        component: AddJEComponent,

        pathMatch:'full'
      },
      {
        path:'editJE/:id',
        component: EditJeComponent,

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
      {
        path:'academic/edit',
        component: EditAcademiclevelComponent,
        pathMatch:'full'
      },
    ]
  },
]

@NgModule({
  declarations: [
    AdminComponent,
    HeaderAdComponent,
    SidebarComponent,
    EditAcademiclevelComponent,
    ListUserComponent,

  ],
  imports: [
    RouterModule.forChild(Adminroutes),
    ReactiveFormsModule,
    CommonModule
    // BrowserModule

  ],
  exports: [RouterModule],
})
export class AdminModule { }
