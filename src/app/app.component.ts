import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { serviceSubject } from './Services/serviceSubject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  didActivated = false;
  didActivatedSubject = false;
  private subscription:Subscription = new Subscription();

  constructor(private serviceSubject:serviceSubject){}

  ngOnInit(): void {
    this.serviceSubject.activateEventEmitter.subscribe((data)=>{
      this.didActivated = data;
    });

    this.subscription = this.serviceSubject.activateEventEmitterSubject.subscribe((data)=>{ //keep call subscripe because it is observable.
      this.didActivatedSubject = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



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
