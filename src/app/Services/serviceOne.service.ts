import { EventEmitter, Injectable } from "@angular/core";
import { MessageInjectable } from "./serviceInjected.service";
//import { MessageInjectable } from "./serviceInjected.service";

//service without meta-data(decorate to insert service in), but we can do that by @inject() as below:
//As provide should be in app.module.ts
@Injectable() // used to inject other sub service in this service, it should be empty.


export class serviceOne{
  btnState = new EventEmitter<string>();
  constructor(private message:MessageInjectable){}
  dataFromService_2 = new EventEmitter<string>();



  GetServiceValue(data:any){
    console.log(data);
    console.log(this.dataFromService_2);
    //this.message.SendMessage("From injectable service...");
  }
}
