import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() GetNote: any; noteID: any
  @Output() displaytogetallnotes = new EventEmitter<string>();
  @Output() noteUpdated = new EventEmitter<any>();
  sentmsg: any;
  subscription: any;
  searchword: any;
  message: any;

  constructor(public dialog: MatDialog, private data: DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => {
      this.message = message;
      console.log(message.data[0]);
      this.searchword = message.data[0]
    });
  }

  openDialog(noteArr: any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '400px',
      height: '150px',
      data: noteArr,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.noteUpdated.emit(result);
      //window.location.reload();
    });
  }
  operation(value: any) {
    this.noteUpdated.emit(value);
  }
  recievefromiconstodisplaycard($event: any) {
    console.log("recievedindisplay", $event);
    this.sentmsg = $event
    this.displaytogetallnotes.emit(this.sentmsg)

  }

}



