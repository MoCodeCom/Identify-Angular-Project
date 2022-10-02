import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
//import { NgModel } from '@angular/forms';

import {LandlordInfo} from './appLandlords/appLandlords.component';
import { AppTenentsComponent } from './app-tenents/app-tenents.component';
import { IncomeComponent } from './Money/income/income.component';
import { PaymentComponent } from './Money/Payment/payment.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { DirctivesComponent } from './dirctives/dirctives.component';
import {DirOne} from './Directives/DirectivesOne/DirOne';
import { DirTwoDirective } from './Directives/DirectiveTwo/dir-two.directive';
import { HostListenerDirective } from './Directives/DirctiveThree/host-listener.directive';
import { DirFourDirective } from './Directives/DirctiveFoure/dir-four.directive';
import { ServiceTestOneComponent } from './Services/service-test-one/service-test-one.component';
import { MessageInjectable} from './Services/serviceInjected.service';
import { ServiceTestTwoComponent } from './Services/service-test-two/service-test-two.component';
import { pipe1 } from './Pipes/pipe_1.pipe';
//<-------------------------> root <--------------------------------->
//import { Routes, RouterModule } from '@angular/router';
import { serviceOne } from './Services/serviceOne.service';
import { serviceTwo } from './Services/serviceTwo.service';
import { HomeComponent } from './Pages/home/home.component';
import { Page1Component } from './Pages/page1/page1.component';
import { Page2Component } from './Pages/page2/page2.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModelComponent } from './app-routing-model/app-routing-model.component';
import { AppRoutingModel } from './app-routing.model' // about routs class and declerations.




@NgModule({
  declarations: [

    AppComponent,
    LandlordInfo,
    AppTenentsComponent,
    IncomeComponent,
    PaymentComponent,
    LifeCycleComponent,
    DirctivesComponent,
    DirOne,
    DirTwoDirective,
    HostListenerDirective,
    DirFourDirective,
    ServiceTestOneComponent,
    ServiceTestTwoComponent,
    pipe1,
    AppRoutingModelComponent

  ],
  imports: [
    AppRoutingModel,
    BrowserModule,
    //AppRoutingModule,
    FormsModule,


  ],
  providers: [MessageInjectable],
  bootstrap: [AppComponent]
})
export class AppModule { }
