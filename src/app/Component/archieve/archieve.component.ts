import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
notes:any=[];
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getarchieve()
  }
  getarchieve() {    // Api integartion for api notes 
    this.note.getNoteList().subscribe(
      (response: any) => {
        this.notes = response.data;
        console.log(this.notes);
        this.notes = this.notes.filter((object: any) => {
          return  object.isArchieve === true;
        } )

      })
  }

}
