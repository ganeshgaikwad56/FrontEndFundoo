import { Component, Input, OnInit } from '@angular/core';
import { LabelService } from 'src/app/services/LabelService/label.service';


@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input()GetLable: any;
  lableName:any;
  isLable:boolean =false;
  isDelete:boolean =false;
  lableArray:any=[];
  userId:any;

  constructor(private label:LabelService
   
  ) { }
  hideAndShow(){
    console.log("calling hide")
    this.isLable=!this.isLable
    
  }
  show(){
    this.isDelete=!this.isDelete
  }
  ngOnInit(): void {
    this.getAllLable()
  }
  onCreate() {
    

    // stop here if form is invalid
    
      let reqdata = {
        labelName:this.lableName
      };
      this.label.createLabel(reqdata).subscribe((response:any)=>{
        console.log(response);
         
      
      });
    }
    getAllLable() { 
      let reqdata = {
        userID : [this.lableArray.userId ],
      }
      
    
      this.label.getAllLable(reqdata).subscribe((response: any) => {
          this.lableArray = response.data;
          console.log(response);
          this.lableArray.reverse();
      })
    }
    DeleteLabel(lableId:any) { 
      let reqdata = {
        LabelId : lableId,
      }
      console.log("check label id",reqdata)
      
    
      this.label.deleteLabel(reqdata).subscribe((response: any) => {
          this.lableArray = response.data;
          console.log(response);
         
      })
    }
}
