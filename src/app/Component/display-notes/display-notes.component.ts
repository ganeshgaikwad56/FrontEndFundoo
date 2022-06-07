import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input()GetNote : any; noteID:any
  @Output() displaytogetallnotes=new EventEmitter<string>();
sentmsg:any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(noteArr:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '400px',
      height:'150px',
      data: noteArr,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //window.location.reload();
    }); 
  }
  recievefromiconstodisplaycard($event: any) {
    console.log("recievedindisplay", $event);
    this.sentmsg = $event
    this.displaytogetallnotes.emit(this.sentmsg)
  
  }

}
