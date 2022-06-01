import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/UserService/userservice.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm!: FormGroup;
    submitted = false;
    public showPassword: boolean = false;


    constructor(private formBuilder: FormBuilder,private user: UserserviceService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
    });
  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  onSubmit(){
    this.submitted = true;
    console.log(this.registerForm.value);

    if(this.registerForm.valid){
      let reqdata = {
        firstname: this.registerForm.value.firstName,
        lastname: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      }
      this.user.registration(reqdata).subscribe((Response: any)=>{
        console.log(Response);

      
      });
    }
  }
}
