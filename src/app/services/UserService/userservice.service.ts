import { Injectable } from '@angular/core';
import { HttpserviceService } from '../HttpService/httpservice.service';

import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  token: any;

  constructor(private httpService: HttpserviceService) {
    this.token = localStorage.getItem("token")
  }
  registration(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'token'
      })
    }

    return this.httpService.postService('/User/register', reqdata, false, header)
  }
  login(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'token'
      })
    }

    //return this.httpService.postService('/User/login',reqdata,false,header)
    return this.httpService.postService(`/User/login/${reqdata.Email}/${reqdata.Password}`, reqdata, false, header)
  }
  forgetpass(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'token'
      })
    }

    //return this.httpService.postService('/User/login',reqdata,false,header)
    return this.httpService.postService(`/User/ForgotPassword/${reqdata.email}`, reqdata, false, header)
  }
  resetpassword(reqdata: any, token: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token

      })
    }
    return this.httpService.putService('/User/ChangePassword',reqdata,true,header)
  }

}
