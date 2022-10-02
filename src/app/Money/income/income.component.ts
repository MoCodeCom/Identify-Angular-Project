import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  
  @Input('el') element:{ type:string , payment:number } = {type:"", payment:0}; //Defining a type...

  constructor() { 
    //console.log(this.element);
  }

  ngOnInit(): void {

  }

}
