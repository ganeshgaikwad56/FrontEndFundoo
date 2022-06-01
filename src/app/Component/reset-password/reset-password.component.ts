import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserserviceService } from 'src/app/services/UserService/userservice.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetpasswordForm!: FormGroup;
  submitted = false;
  token: any

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private user: UserserviceService) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token')
    this.resetpasswordForm = this.formBuilder.group({
      Newpassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
    
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.resetpasswordForm.value);

    if (this.resetpasswordForm.valid) {
      let reqdata = {
        password: this.resetpasswordForm.value.Newpassword,
        confirmPassword: this.resetpasswordForm.value.confirmPassword
      }
      console.log(this.token);
      console.log(reqdata);
      this.user.resetpassword(reqdata, this.token).subscribe((Response: any) => {
        console.log(Response);


      });
    }
  }

}
