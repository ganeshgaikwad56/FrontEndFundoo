import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {

  constructor(private AllNote: NoteService) { }

  notes: any = [];


  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes() {    // Api integartion for api notes 
    this.AllNote.getNoteList().subscribe(
      (response: any) => {


        this.notes = response.data;
        console.log(response);
        this.notes = this.notes.filter((object: any) => {
          return  object.isTrash === false && object.isArchieve===false;
        })

      })
  }

}


