import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../HttpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
token:any;
  constructor(private httpService: HttpserviceService) {  this.token=localStorage.getItem("token")}
  createLabel(reqdata: any) {
    console.log(reqdata);
    console.log(this.token);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpService.postService(`/CreatLabel/${reqdata.labelName}`, reqdata, true, header)
  }
  getAllLable(userID:any) {

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpService.getService(`/GetLabelByuserId/${userID}`, true, header)
  }
  deleteLabel(reqdata:any) {

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpService.deleteService(`/DeleteLable/${reqdata.LabelId}`,true, header)
  }
  
}
