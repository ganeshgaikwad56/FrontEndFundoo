import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './Component/registration/registration.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Component/login/login.component';
import { ForgetPassComponent } from './Component/forget-pass/forget-pass.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';
import { MydashboardComponent } from './Component/mydashboard/mydashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { GetallnotesComponent } from './Component/getallnotes/getallnotes.component';
import { DisplayNotesComponent } from './Component/display-notes/display-notes.component';
import { CreateNoteComponent } from './Component/create-note/create-note.component';
import { NoteIconComponent } from './Component/note-icon/note-icon.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { AuthguardServiceService } from './services/AuthguardService/authguard-service.service';
import { UpdateComponent } from './Component/update/update.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { TrashnoteComponent } from './Component/deletenote/trashnote.component';
import { GettrashComponent } from './Component/gettrash/gettrash.component';
import { ArchieveComponent } from './Component/archieve/archieve.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetPassComponent,
    ResetPasswordComponent,
    MydashboardComponent,
    GetallnotesComponent,
    DisplayNotesComponent,
    CreateNoteComponent,
    NoteIconComponent,
    UpdateComponent,

    TrashnoteComponent,
     GettrashComponent,
     ArchieveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,MatDialogModule,MatMenuModule,MatSnackBarModule,
    MatSidenavModule,MatToolbarModule,MatListModule,MatIconModule,MatCardModule,MatExpansionModule
  ],
  providers: [
    AuthguardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
