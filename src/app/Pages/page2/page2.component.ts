import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit, OnDestroy {
  userData: {id:number, name:string} = {id:0, name:'default'};
  subscripeParam: Subscription = new Subscription;

  constructor(private routPage:Router, private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.userData = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    // to update params value...
    this.subscripeParam = this.route.params.subscribe((params: Params)=>{
      this.userData.id = params['id'],
      this.userData.name = params['name']
    });
  }

  ngOnDestroy(): void {
    this.subscripeParam.unsubscribe();
  }

  refreshPage(){
    this.routPage.navigate(['page2']);
    console.log('referesh is done!');
  }
}
