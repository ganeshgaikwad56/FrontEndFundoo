import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';
import { LabelComponent } from '../label/label.component';
import { MatDialog } from '@angular/material/dialog';
import { LabelService } from 'src/app/services/LabelService/label.service';

@Component({
  selector: 'app-mydashboard',
  templateUrl: './mydashboard.component.html',
  styleUrls: ['./mydashboard.component.scss']
})
export class MydashboardComponent implements OnInit {
  message: any;
  value: any;
  userID:any;
  labelName:any;
  lableArray: any = [];

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private getLable: LabelService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private rout: Router, private snackBar: MatSnackBar, private data: DataService, public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnInit(): void {
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.getAllLable()
  }
  searchtitle(event: any) {
    console.log("input in search field ===", event.target.value);
    this.value = event.target.value
    let Ddata = {
      type: 'search',
      data: [this.value]
    }
    this.data.changeMessage(Ddata)
  }

  logout() {
    localStorage.removeItem("token");
    this.rout.navigateByUrl('/login')
    console.log("logout success")
    this.snackBar.open('Logout Successfully..!!!', '..', {
      duration: 3000,
    })
    //this.rout.navigateByUrl('/login')
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LabelComponent, {
      width: '275px',
      // data: {name: this.name, animal: this.animal},
      data:this.lableArray
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  // getAllLable(userID:any) {
  //   let reqdata = {
  //     userId: userID,
  //   }
  //   console.log("check userid", reqdata)
  //   console.log(this.userID
  //     )


  //   this.getLable.getAllLable(reqdata).subscribe((response: any) => {
  //     this.lableArray = response.data;
  //     console.log(response);
  //     this.lableArray.reverse();
  //   })
  // }
  getAllLable() { 
    let reqdata = {
      userID : [this.lableArray.userId ],
    }
    // console.log(this.userId,"anki  raghu" )
  
    this.getLable.getAllLable(reqdata).subscribe((response: any) => {
        this.lableArray = response.data;
        console.log(response);
        this.lableArray.reverse();
    })
  }
}

