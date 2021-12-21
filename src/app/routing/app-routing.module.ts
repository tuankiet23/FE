import { Component, NgModule } from "@angular/core";
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/user/home/home.component";
import { JobDetailComponent } from "../components/user/job-detail/job-detail.component";
import { ListJobComponent } from "../components/user/list-job/list-job.component";
import { LoginComponent } from "../components/authen/login/login.component";
import { PersonalInfoComponent } from "../components/user/personal-info/personal-info.component";
import { RecruitmentComponent } from "../components/user/recruitment/recruitment.component";

import { AdminComponent } from "../components/admin/admin.component";
import { UserComponent } from "../components/user/user.component";
import { GuardsGuard } from "../guards/guards.guard";
const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        loadChildren: () => import("src/app/components/user/user.module").then(m => m.UserModule)
    },
    {
        path: 'authen',
        loadChildren: () => import("src/app/components/authen/authen.module").then((m) => m.AuthenModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('src/app/components/admin/admin.module').then(m => m.AdminModule),
        canActivate:[GuardsGuard],
    }

]

@NgModule({
    declarations:[],
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
