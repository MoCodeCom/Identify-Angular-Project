import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class serviceSubject{
  activateEventEmitter = new EventEmitter<boolean>();
  activateEventEmitterSubject = new Subject<boolean>(); // subject From rxjs library...
}
