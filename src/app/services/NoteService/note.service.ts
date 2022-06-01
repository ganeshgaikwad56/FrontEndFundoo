import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../HttpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;

  constructor(private httpService: HttpserviceService) {
    this.token = localStorage.getItem("token")
  }
  createnote(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.postService(`/AddNote?Title=${reqdata.Title}&Description=${reqdata.Description}&Colour=${reqdata.Colour}`, reqdata, true, header)
 
  }
  getNoteList() {
    this.token = localStorage.getItem('token')
    console.log("inside getnote service");
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('/GetAllNotes', true, header)
  }
}