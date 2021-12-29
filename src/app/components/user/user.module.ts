import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ListJobComponent } from './list-job/list-job.component';
import { UserComponent } from './user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PopupApplyjobComponent } from './popup-applyjob/popup-applyjob.component';
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
        path: 'popup-applyjob',
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

  declarations: [UserComponent, HeaderComponent,  FooterComponent, PopupApplyjobComponent, ListUploadComponent, DetailsUploadComponent ],

  imports: [
    CommonModule,

    RouterModule.forChild(UserRoutes),
  ],
  exports:[RouterModule]
})
export class UserModule { }
