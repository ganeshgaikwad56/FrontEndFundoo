import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { url } from 'inspector';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  baseurl=environment.baseUrl;

  constructor(private httpClient :HttpClient) {}

  postService(url: string, reqdata: any, token: boolean= false, httpOptions: any={} ){

    return this.httpClient.post(this.baseurl+url,reqdata,token && httpOptions)

  }
  getService(url:string='', tokenRequired:boolean=false, httpOptions:any={} ){

    return this.httpClient.get(this.baseurl+url,tokenRequired && httpOptions)
  }
}
