import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-note-icon',
  templateUrl: './note-icon.component.html',
  styleUrls: ['./note-icon.component.scss']
})
export class NoteIconComponent implements OnInit {
  @Input() noteCard: any;
  noteID: any;
  isArchieve:boolean = false;
  
  constructor(private note: NoteService) {

  }

  ngOnInit(): void { 
  }
  Deletenote() {
    let reqdata = {
      noteID: [this.noteCard.noteId],
      isDeleted: true,
      

    }
    // console.log("print Req",reqdata)
    this.note.deleteNote(reqdata).subscribe((response: any) => {
      console.log('Delete Notes', response);
      
    })
  }
  Archievenote() {
    let reqdata = {
      noteID: [this.noteCard.noteId],
      isArchieve:true,

    }
    // console.log("print Req",reqdata)
    this.note.archieveNote(reqdata).subscribe((response: any) => {
      console.log('Delete Notes', response);
      
    })
  }
}


