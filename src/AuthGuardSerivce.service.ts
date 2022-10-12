import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()
export class AuthGuard implements CanActivate{
  // To call authservice class...
  constructor(private authService:AuthService, private router:Router){};

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean | any>
    {
    //throw new Error("Method not implemented.");
    /*
    return this.authService.isAuthenticated().then(
      (data:boolean)=>{
        if(data){
          return true;
        }else{
          this.router.navigate(['/']);
        }
      }
    );
  */
 return this.authService.isAuthenticated();
  }

  canActivateChild( route: ActivatedRouteSnapshot,
    state:RouterStateSnapshot):boolean|Observable<boolean>|Promise<boolean>{
      return this.canActivate(route, state);
  }

}
