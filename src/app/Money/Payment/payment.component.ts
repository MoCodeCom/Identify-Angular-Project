import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() element:{type:string, payment:number} = {type:"", payment:0};

  @Output() emitValue_1= new EventEmitter<{type:string, payment:number}>();
  @Output() emitValue_2= new EventEmitter<{type:string, payment:number}>();

  @ViewChild('referenceInputChild',{static:true}) childReference?: ElementRef;
  newValue:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  value_1_fun(){
    this.emitValue_1.emit({
      type: this.newValue,
      payment:1
    });
  }
  
  value_2_fun(){
    this.emitValue_2.emit({
      type:this.newValue,
      payment:2
    });
  }

  GetReference(data:HTMLInputElement){
    console.log(data.value + " by reference");
  }

  GetReferenceChild(){
    console.log(this.childReference?.nativeElement.value +" by child");
  }

}
