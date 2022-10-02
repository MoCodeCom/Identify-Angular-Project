import { Injectable } from "@angular/core";


@Injectable()
export class MessageInjectable{
  SendMessage(data:string){
    console.log(data);
  }
}
