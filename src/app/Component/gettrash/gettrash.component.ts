import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-gettrash',
  templateUrl: './gettrash.component.html',
  styleUrls: ['./gettrash.component.scss']
})
export class GettrashComponent implements OnInit {
  notes: any = [];
  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.gettrash()
  }
  gettrash() {    // Api integartion for api notes 
    this.note.getNoteList().subscribe(
      (response: any) => {


        this.notes = response.data;
        console.log(this.notes);
        this.notes.reverse();
        this.notes = this.notes.filter((object: any) => {
          return object.isTrash === true;
        })


      })
  }

  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes", $event);
    this.gettrash();

}

}
