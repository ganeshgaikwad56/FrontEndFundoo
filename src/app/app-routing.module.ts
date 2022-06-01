import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPassComponent } from './Component/forget-pass/forget-pass.component';
import { GetallnotesComponent } from './Component/getallnotes/getallnotes.component';
import { LoginComponent } from './Component/login/login.component';
import { MydashboardComponent } from './Component/mydashboard/mydashboard.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'forget-pass',component:ForgetPassComponent},
  {path:'reset-password/:token',component:ResetPasswordComponent},
  {path:'mydashboard',component:MydashboardComponent,
  children:[
    {path:'getallnotes', component:GetallnotesComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
