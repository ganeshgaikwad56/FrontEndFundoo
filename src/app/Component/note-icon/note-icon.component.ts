import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/services/NoteService/note.service';
import { ArchieveComponent } from '../archieve/archieve.component';

import { GetallnotesComponent } from '../getallnotes/getallnotes.component';
import { GettrashComponent } from '../gettrash/gettrash.component';

@Component({
  selector: 'app-note-icon',
  templateUrl: './note-icon.component.html',
  styleUrls: ['./note-icon.component.scss']
})
export class NoteIconComponent implements OnInit {
  @Input() noteCard: any;
  @Output() iconstodisplay = new EventEmitter<string>()
  noteID: any;
  isArchieve: boolean = false;
  isTrash: boolean = false;
  NoteListId: any;


  constructor(private note: NoteService, private snackBar: MatSnackBar, private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    let comp = this.router.snapshot.component;
    if (comp == GettrashComponent) {
      this.isTrash = true;
      console.log(this.isTrash, "Icon switched")

    }
    if (comp == ArchieveComponent) {
      this.isArchieve = true;
    }

  }
  //Trash*******************************************************************************
  Trash() {
    let reqdata = {
      noteID: [this.noteCard.noteId],
      isTrash: true,
    }
    // console.log("print Req",reqdata)
    this.note.deleteNote(reqdata).subscribe((response: any) => {
      console.log('Delete Notes', response);
      this.iconstodisplay.emit(response);
      this.snackBar.open('Note Trashed Successfully..!!!', '..', {
        duration: 3000,
      })
      

    })
    //window.location.reload();
  }
  //Archieve**************************************************************************
  Archievenote() {
    let reqdata = {
      noteID: [this.noteCard.noteId],
      isArchieve: true,
    }
    // console.log("print Req",reqdata)
    this.note.archieveNote(reqdata).subscribe((response: any) => {
      console.log('Archive Notes', response);
      this.iconstodisplay.emit(response);
      this.snackBar.open('Note Archieve Successfully..!!!', '..', {
        duration: 3000,
      })

    })
    //window.location.reload();
  }
  //UnArchieve**************************************************************************
  UnArchievenote() {
    let reqdata = {
      noteID: [this.noteCard.noteId],
      isArchieve: false,
    }
    // console.log("print Req",reqdata)
    this.note.archieveNote(reqdata).subscribe((response: any) => {
      console.log('Archive Notes', response);
      this.iconstodisplay.emit(response);
      this.snackBar.open('Note Unarchieve Successfully..!!!', '..', {
        duration: 3000,
      })

    })
    //window.location.reload();
  }
  //Delete permanent*******************************************************************
  DeletePermanent() {
    let reqdata = {
      noteID: [this.noteCard.noteId],
      isTrash: true,



    }
    // console.log("print Req",reqdata)
    this.note.deleteNotePermanent(reqdata).subscribe((response: any) => {
      console.log('Delete Notes', response);
      this.iconstodisplay.emit(response);
      this.snackBar.open('Note permanently Deleted ..!!!', '..', {
        duration: 3000,
      })

    })
    //window.location.reload();
  }
  //Restore note******************restore*************************************************
  Restore() {
    let reqdata = {
      noteID: [this.noteCard.noteId],
      isTrash: false,
    }
    this.note.deleteNote(reqdata).subscribe((response: any) => {
      console.log('Delete Notes', response);
      this.iconstodisplay.emit(response);
      this.snackBar.open('Note Restored Successfully..!!!', '..', {
        duration: 3000,
      })
    })
  }
  //SetColor Api****************************************************************************

  setColor(colour: any) {
    this.NoteListId = this.noteCard.colour = colour;
    let reqData = {
      colour: colour,
      noteID: [this.noteCard.noteId]
    };

    this.note.colorNoteService(reqData).subscribe((res: any) => {
      console.log(res);
      console.log("color dekh", reqData)
    });
  }
  colorarray =[{Colorcode:"pink"},
  {Colorcode:"yellow"},
  {Colorcode:"orange"},
  {Colorcode:"rgb(255,99,71)"},{Colorcode:"rgb(152,251,152)"},
  {Colorcode:"Teal"},{Colorcode:"rgb(106,90,205)"},
  {Colorcode:"rgb(240,230,140)"},{Colorcode:"rgb(238,130,238)"},
  {Colorcode:"rgb(255,160,122)"}];
}


