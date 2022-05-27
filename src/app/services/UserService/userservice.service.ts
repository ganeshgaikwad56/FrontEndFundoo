import { Injectable } from '@angular/core';
import {HttpserviceService} from '../HttpService/httpservice.service';

import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  token:any;

  constructor(private httpService: HttpserviceService) {
    this.token= localStorage.getItem("token")
   }
   registration(reqdata: any){
     console.log(reqdata);
     let header = {
       headers:new HttpHeaders({
         'Content-type':'application/json',
         'Authorization':'token'
       })
     }

     return this.httpService.postService('/User/register',reqdata,false,header)
   }
}
