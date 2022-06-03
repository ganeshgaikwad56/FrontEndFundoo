import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../HttpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;
  noteID:any

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
    return this.httpService.postService('/Note/AddNote', reqdata, true, header)
 
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
    return this.httpService.getService('/Note/GetAllNotes', true, header)
  }
  updateNote(reqdata: any,noteID:any) {
    console.log(reqdata);
    console.log(this.token);
    console.log(this.noteID)

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`/Note/UpdateNote/${noteID}`, reqdata, true, header)
  }
  deleteNote(reqdata: any) {
    console.log(reqdata);
    

    let header = {
      headers: new HttpHeaders({
        
        'Content-type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,

      }),
    };
    return this.httpService.putService( `/Note/TrashNote/${reqdata.noteID}`, reqdata, true,header );
  }
  archieveNote(reqdata: any) {
    console.log(reqdata);
    

    let header = {
      headers: new HttpHeaders({
        
        'Content-type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,

      }),
    };
    return this.httpService.putService( `/Note/ArchieveNote/${reqdata.noteID}`, reqdata, true,header );
  }
}