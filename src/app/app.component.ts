import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductListService } from './services/product-list.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ApplicationStateService } from './services/application-state.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  title = 'EcommerceApp';
  queryControl=new FormControl()
  isMobileView=false
  timelineres:any[]=[]
  timelineresDisplay:any[]=[];
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  public constructor(
    private applicationStateService: ApplicationStateService,
    private observer: BreakpointObserver
){
  if (applicationStateService.getIsMobileResolution()) {
  
    //log("is Mobile screen view")
    this.isMobileView=true
  }else{
    this.isMobileView=false
    //log("Desktop view")
  }
}

  ngOnInit() {
    //this.timelineres=this.data.list
    //this.timelineresDisplay=this.timelineres;
    // this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
    //   if (res.matches) {
    //     this.sidenav.mode = 'over';
    //     this.sidenav.close();
    //   } else {
    //     this.sidenav.mode = 'side';
    //     this.sidenav.open();
    //   }
    // });
   
  }
}
