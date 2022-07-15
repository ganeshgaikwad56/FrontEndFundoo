import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  @Output() noteUpdated = new EventEmitter<any>();
  title: any;
  description: any;
  noteID: any;
  colour:any;


  constructor(private note: NoteService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.title = data.title
    this.description = data.description
    this.noteID = data.noteId
    this.colour=data.colour
    console.log(this.noteID)
    console.log("print data",data)
  }
  


  ngOnInit(): void {
    console.log("Fron display notes single note", this.data);
    console.log(this.noteID)

  }
  onSubmit() {
    let reqData = {
      Title: this.title,
      Description: this.description,
      colour: this.colour,
      IsPin:false,
      IsTrash:false,
      IsRiminder:false,
      IsArchieve:false


    }
    
    console.log("Request data print",reqData)
    this.note.updateNote(reqData, this.noteID).subscribe((response: any) => {
      console.log(response);
      this.noteUpdated.emit(response);

    }, error => {
      console.log(error);
    });
    //window.location.reload();
  }

}
