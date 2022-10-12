import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Observable, Subscription } from 'rxjs';
import { Observer } from 'rxjs-compat';
import { map } from 'rxjs/operators';
//import { map } from 'rxjs-compat/operator/map'; // this reference not working..

@Component({
  selector: 'app-observable-page4',
  templateUrl: './observable-page4.component.html',
  styleUrls: ['./observable-page4.component.css']
})
export class ObservablePage4Component implements OnInit, OnDestroy {
  private subscriptionDestory:Subscription = new Subscription();
  private subscriptionDestroyOperator:Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
    /*
    this.subscriptionDestory = interval(1000).subscribe(count=>{
      console.log(count);
    })*/
    // behind the seans below ...

    const intervalObserver = Observable.create((obsr: Observer<any>)=> {//--------->  Observable...
      let count = 0;
      setInterval(() => {

        obsr.next(count);
        count++;
        if(count === 2){
          obsr.complete();
        }

        if(count > 3){
          obsr.error(new Error('count is greater than 3?'));// For error task
        }
      }, 1000);
    });

    const intervalObservableWithOperator = Observable.create((data:Observer<any>)=>{//---------------observable...
      let count = 0;
      setInterval(()=>{

        data.next(count);
        count++;
        if(count === 8){
          data.complete();
        }

        if(count === 11){
          data.error(new Error('count is Greater form observableOperator !'));
        }
      }
        ,2000);
    });

    //could add more than one operator, in the examp below (filter & map)

    this.subscriptionDestory = intervalObserver.subscribe(  // ----------------------------> Observer----->.subscribe()
      (data:any) => console.log(data) // all the reflactions should be as in console such as count, error or even complete.
      ,
      () =>{//-----------------------------------------------------------------------------> Oberver
        console.log('complete...');
        alert('Task is completed');
      }
      ,
      (error:any) => { // to specify the alert for error message...
        console.log(error);
        alert(error);
      }
      );


    this.subscriptionDestroyOperator = intervalObservableWithOperator.pipe(
      map((d:any)=>{
      return 'round : '+ d;
    }))

    .subscribe(
      (data:any)=>{console.log(data);},
      ()=>{console.log('complete operate...')},
      (err:any)=>{console.log(err);}

    );
  }

  ngOnDestroy(): void {
    this.subscriptionDestory.unsubscribe();
    this.subscriptionDestroyOperator.unsubscribe();
  }

}
