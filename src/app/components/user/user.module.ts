import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ListJobComponent } from './list-job/list-job.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { UserComponent } from './user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailpersonalComponent } from './personal-info/detailpersonal/detailpersonal.component';
import { EditpersonalComponent } from './personal-info/editpersonal/editpersonal.component';
import { PopupApplyjobComponent } from './popup-applyjob/popup-applyjob.component';
import { FormUploadComponent } from './popup-applyjob/upload/form-upload/form-upload.component';
import { ListUploadComponent } from './popup-applyjob/upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './popup-applyjob/upload/details-upload/details-upload.component';

const UserRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'job/:id',
        component: JobDetailComponent,
        pathMatch: 'full'
      },
      {
        path: 'job',
        component: ListJobComponent,
        pathMatch: 'full'
      },
      {
        path: 'recruitment',
        component: PopupApplyjobComponent,
        pathMatch: 'full'
      },
      
      {
        path: 'info',
        loadChildren: () => import("src/app/components/user/personal-info/personal-info.module").then(m => m.PersonalInfoModule)
      },

    ],
  }

];

@NgModule({
  declarations: [UserComponent,HomeComponent, HeaderComponent,  FooterComponent, PopupApplyjobComponent, FormUploadComponent, ListUploadComponent, DetailsUploadComponent ],
  imports: [
    CommonModule,

    RouterModule.forChild(UserRoutes),
  ],
  exports:[RouterModule]
})
export class UserModule { }
