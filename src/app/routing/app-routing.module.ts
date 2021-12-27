import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
        // canActivate:[GuardsGuard],
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
