import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatSnackBar} from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mydashboard',
  templateUrl: './mydashboard.component.html',
  styleUrls: ['./mydashboard.component.scss']
})
export class MydashboardComponent implements OnInit {
  message:any;
  value:any;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private rout:Router, private snackBar:MatSnackBar,private data:DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnInit(): void {
    this.mobileQuery.addListener(this._mobileQueryListener);

  }
  searchtitle(event: any) {
    console.log("input in search field ===",event.target.value);
    this.value = event.target.value
    let Ddata = {
      type: 'search',
      data: [this.value]
    }
    this.data.changeMessage(Ddata)
  }

  logout(){
    localStorage.removeItem("token");
    this.rout.navigateByUrl('/login')
    console.log("logout success")
    this.snackBar.open('Logout Successfully..!!!','..', {
      duration: 3000,
    })
    //this.rout.navigateByUrl('/login')
  }

}
