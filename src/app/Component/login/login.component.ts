import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/UserService/userservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  public showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder,private user:UserserviceService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  onSubmit(){
    this.submitted = true;
    console.log(this.loginForm.value);

    if(this.loginForm.valid){
      let reqdata = {
        Email: this.loginForm.value.email,
        Password: this.loginForm.value.password
      }
      console.log(reqdata);
      this.user.login(reqdata).subscribe((Response: any)=>{
        console.log(Response);
        localStorage.setItem("token",Response.data);

        
      });
    }
  }

}
