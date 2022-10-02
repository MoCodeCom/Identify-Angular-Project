import { Component, OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy,




} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy{

  boolChange:boolean= false;
  constructor() { }

  ChangeProp(){
    this.ngOnChanges();
    this.boolChange?true:false;
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnChanges(){
    console.log("Change is done");
  }

  ngDoCheck(){
    console.log("do check!");
  }

  ngAfterContentInit(){
    console.log("AfterContent init");
  }

  ngAfterContentChecked(){
    console.log("After content checked");
  }

  ngAfterViewInit(){
    console.log("After view Init");
  }

  ngAfterViewChecked(){
    console.log("After view checked");
  }

  ngOnDestroy(){
    console.log("On destroy");
  }

}
