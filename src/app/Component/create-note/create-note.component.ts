import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/NoteService/note.service';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  @Output() createtodisplay = new EventEmitter<string>()
  createnoteForm!: FormGroup;
  submitted = false;
  show = false
  panelOpenState = false;
  constructor(private formBuilder: FormBuilder, private note: NoteService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.createnoteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      colour: " "
    });
  }
  hideAndShow() {
    console.log("calling hide")
    this.show = !this.show
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.createnoteForm.value);
    if (this.createnoteForm.valid) {
      let reqdata = {
        Title: this.createnoteForm.value.title,
        Description: this.createnoteForm.value.description,
        //Colour: this.createnoteForm.value.color,

      }
      this.note.createnote(reqdata).subscribe((Response: any) => {
        console.log(Response);
        this.createtodisplay.emit(Response)
        this.snackBar.open('Note Created Successfully..!!!', '..', {
          duration: 3000,
        })


      });

    }
    
  }
}
