import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import {Page2Component} from "../Pages/page2/page2.component";

interface IService{
  id:number, name:string, status:string
}

//export class serviceData implements Resolve<IService>
export class serviceData {
  constructor(private p2:Page2Component){}


  /*
  resolve(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<IService> | Promise<IService> | IService{
    return this.p2.userData.
  }
  */

}
