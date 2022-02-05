import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductListService } from 'src/app/services/product-list.service';
import {MatDialog} from '@angular/material/dialog';
import { findIndex } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  queryControl=new FormControl()
  timelineres:any[]=[]
  timelineresDisplay:any[]=[];
  list:any[]=[]
idToDel=""
size=10;
page=0;
hasMore:boolean=true
  @ViewChild("userDialogTemplate")
  userDialogTemplate!: TemplateRef<any>;

  constructor(private  data:ProductListService,public dialog: MatDialog,
    private _snackBar: MatSnackBar,) { }

  ngOnInit() {
   
    this.queryControl.valueChanges.subscribe(val=>{
      //log("filtering",val)
      this.timelineresDisplay=this.timelineres;

      this.timelineresDisplay=this.timelineres.filter(d=>{
        d.name.toLowerCase().includes(val.toLowerCase())
        if(d.name.toLowerCase().includes(val.toLowerCase())){
          //log(d)
          return(d)
        }
      
      })
    })  
  //  this.data.currentData.subscribe(data => this.data = data); 
    this.data.currentData.subscribe(prodList => {//log("data rec from behv is ",prodList),
    this.list = prodList}); 
    //log("The data is ",this.list)
    this.timelineres=this.list.reverse()
    //this.timelineresDisplay=this.timelineres;
    
    this.fetchPost(true)
  }
  openDialog( id:string) {
    //log("the id to be deleted is",id)
    this.idToDel=id
    this.dialog.open(this.userDialogTemplate);
  }
  removeProduct(){
    //log("remove prod called")
this.timelineresDisplay=this.timelineresDisplay.filter(x=>{
 if( x.id!==this.idToDel){
   return x;
 }
 
})
//log("the removed list is ",this.timelineresDisplay)
this._snackBar.open("successfully deleted product !", "", {
  duration: 2000,
});
  }
  fetchPost(reload=false ){
    //log("The size is "+this.size+" the page is "+this.page+" reload is "+reload)
    if(reload===false){
      this.page+=1
      //log("Not Reloaded",this.page)
    }
    var firstIndex=this.page*10
    var lastIndex=firstIndex+this.size
    var arSize=this.timelineres.length;
    //log("Arsize is ",arSize)
    if(arSize<lastIndex){
      lastIndex=arSize
      this.hasMore=false
    }
    //log("Timelineres show is ",this.timelineres)
    //log("first index is "+firstIndex+" last index is "+lastIndex)
    if(reload){
      this.timelineresDisplay=this.timelineres.slice(firstIndex,lastIndex)

    }else{
     
      this.timelineresDisplay=[...this.timelineresDisplay,...this.timelineres.slice(firstIndex,lastIndex)]
      //log("appending arrays",this.timelineresDisplay)
    }
 //log("Timeline show is ",this.timelineresDisplay)
  }
}
