import { Router, RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HomeComponent } from "./Pages/home/home.component";
import { Page1Component } from "./Pages/page1/page1.component";
import { Page2Component } from "./Pages/page2/page2.component";
import { ServiceTestOneComponent } from "./Services/service-test-one/service-test-one.component";
import { ObservablePage3Component } from "./observable/observable-page3/observable-page3.component";
import { ObservablePage4Component } from "./observable/observable-page4/observable-page4.component";
import { NgModule} from "@angular/core";
import { AuthGuard } from "src/AuthGuardSerivce.service";


const appRoutes:Routes = [
  {path:'*', component:HomeComponent},
  {path:'page1',component:Page1Component},
  {path:'page2',component:Page2Component},
  {path:'page2/:id/:name',component:Page2Component},

  {path: 'page3',component:ObservablePage3Component},
  {path: 'page3/:id',component:ObservablePage3Component},
  {path: 'page4',component:ObservablePage4Component},

  {path:'service',
  //canActivate:[AuthGuard],
  canActivateChild:[AuthGuard],
  component:ServiceTestOneComponent,
  children:[
    {path:':id/:name/Edit',component:Page2Component}
  ]},
  {path:'not-found',component:NotFoundComponent,data:{message:'There is an Error page from router as static str...'}},
  {path:'**',redirectTo:'not-found'}
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes, {useHash:true})
  ],
  exports:[RouterModule] // to export route out ..
})
export class AppRoutingModel{} // we will use this class as import in app.module.
