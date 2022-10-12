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

import { AppRoutingModelComponent } from './app-routing-model/app-routing-model.component';
import { AppRoutingModel } from './app-routing.model' // about routs class and declerations.
import { AuthService } from 'src/auth.service';
import { AuthGuard } from 'src/AuthGuardSerivce.service';





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
    AppRoutingModelComponent,

  ],
  imports: [
    AppRoutingModel,
    BrowserModule,
    FormsModule
  ],
  providers: [MessageInjectable, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
