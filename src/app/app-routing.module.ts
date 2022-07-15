import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardnameGuard } from './authguardname.guard';
import { ArchieveComponent } from './Component/archieve/archieve.component';
import { ForgetPassComponent } from './Component/forget-pass/forget-pass.component';
import { GetallnotesComponent } from './Component/getallnotes/getallnotes.component';
import { GettrashComponent } from './Component/gettrash/gettrash.component';
import { LabelComponent } from './Component/label/label.component';
import { LoginComponent } from './Component/login/login.component';
import { MydashboardComponent } from './Component/mydashboard/mydashboard.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';

const routes: Routes = [
  {path:'' ,redirectTo:"/login" ,pathMatch:'full'},

  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'forget-pass',component:ForgetPassComponent},
  {path:'reset-password/:token',component:ResetPasswordComponent},
  {path:'mydashboard',component:MydashboardComponent,canActivate:[AuthguardnameGuard],
  children:[
    {path:'', redirectTo:"/mydashboard/getallnotes", pathMatch:'full' },
    {path:'getallnotes', component:GetallnotesComponent},
    {path:'gettrash', component:GettrashComponent},
    {path:'archieve', component:ArchieveComponent},
    {path:'label', component:LabelComponent}
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
