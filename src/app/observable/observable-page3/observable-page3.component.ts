import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { serviceSubject } from 'src/app/Services/serviceSubject.service';

@Component({
  selector: 'app-observable-page3',
  templateUrl: './observable-page3.component.html',
  styleUrls: ['./observable-page3.component.css']
})
export class ObservablePage3Component implements OnInit {
  id:number=0;
  subscribeRoute:Subscription = new Subscription();

  constructor(private route:ActivatedRoute, private serviceSubjects:serviceSubject) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.subscribeRoute = this.route.params.subscribe((param:Params)=>{
      console.log(param);
      console.log(this.id);
      this.id = +param;
    });
  }

  onActivate(){
    this.serviceSubjects.activateEventEmitter.emit(true);

  }

  onActivateSubject(){
    this.serviceSubjects.activateEventEmitterSubject.next(true);
  }

}
