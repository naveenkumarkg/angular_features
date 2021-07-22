
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'; 
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const route: Routes = [
    {path:'', component: LoginComponent},
    {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
    {path:'**', component: PageNotFoundComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports:[RouterModule]
})

export class AppRoutingModule {}