import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title: any;
  description: any;
  noteID: any;
  Colour:any;


  constructor(private note: NoteService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.title = data.title
    this.description = data.description
    this.noteID = data.noteId
    // this.Colour=data.Colour
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
      Colour: "colourName",
      IsPin:false,
      IsTrash:false,
      IsRiminder:false,
      IsArchieve:false


    }
    
    console.log("Request data print",reqData)
    this.note.updateNote(reqData, this.noteID).subscribe((response: any) => {
      console.log(response);

    }, error => {
      console.log(error);
    });
  }

}
