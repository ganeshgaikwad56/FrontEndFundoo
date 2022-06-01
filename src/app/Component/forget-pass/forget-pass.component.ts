import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/UserService/userservice.service';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.scss']
})
export class ForgetPassComponent implements OnInit {

  forgotpasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user: UserserviceService) { }

  ngOnInit() {
    this.forgotpasswordForm = this.formBuilder.group({
        email: ['', Validators.required],
    });
  }
  onSubmit(){
    this.submitted = true;
    //console.log(this.registerForm.value);

    if(this.forgotpasswordForm.valid){
      let reqdata = {
        email: this.forgotpasswordForm.value.email,
        //password: this.registerForm.value.password
      }
      this.user.forgetpass(reqdata).subscribe((Response: any)=>{
        console.log(Response);

        
      });
    }
  }
}
