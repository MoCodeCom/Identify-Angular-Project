import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'appFiles';
  elementInfo=[
    {type:'cash',payment:90},
    {type:'cash',payment:100},
    {type:'cash',payment:80}
  ];
  title='Hi I am Mohammed...';
  name='Mohammed';

  dataObject : {
    type: string; 
    payment: number;
  } = {type:"", payment:0};

  addValue_1(data:{type:string, payment:number}){
    this.elementInfo.push({
      type: data.type,
      payment: data.payment
  });
  }

  addValue_2(data:{type:string, payment:number}){
    this.elementInfo.push({
      type:data.type,
      payment:data.payment
    });
  }
}
