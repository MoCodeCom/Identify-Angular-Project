import { Component, OnInit} from '@angular/core';
import {serviceOne} from '../serviceOne.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-service-test-one',
  templateUrl: './service-test-one.component.html',
  styleUrls: ['./service-test-one.component.css'],
  providers:[serviceOne]
})
export class ServiceTestOneComponent implements OnInit {
ParamVal = 0;
AllowBoolean:boolean = false;
userIdValue=0;
userName='test';

  state = new Promise((res, rej)=>{
    setTimeout(()=>{
      res('stable')
    },2000);
  });
  constructor(private serivce:serviceOne, private router:Router, private paramRoute:ActivatedRoute) {


    this.serivce.dataFromService_2.subscribe(

      (data:string)=>this.dataFromService_2ToSerivce_1 = data
      );
      this.paramRoute.queryParams.subscribe((queryParams:Params)=>{
      this.AllowBoolean=queryParams['allowEdit'] === '1'?true:false;
    });
   }



  ngOnInit(): void {
    //console.log("ngOnInit");
    this.serivce.dataFromService_2.subscribe(
      (data:string)=>this.dataFromService_2ToSerivce_1 = data
      );
  }
  n:number = 0;
  dataFromService_2ToSerivce_1:string='noThing';

  GetService(){
    this.n = this.n+1;
    //const s1 = new serviceOne();
    //s1.GetServiceValue("test from service... "+ this.n);//it is a wrong way to deal with seriveses.
    //console.log("test service");
    //this.serivce.GetServiceValue("corrct service result "+this.n);// it is the right way to write code.
    //this.serivce.btnState.emit("good");
    //this.dataFromService_2ToSerivce_1 = this.serivce.dataFromService_2;
    this.serivce.dataFromService_2.subscribe(
      (datas:string)=>this.dataFromService_2ToSerivce_1 = datas
      );
      console.log(this.dataFromService_2ToSerivce_1);

  }

  GetPageOne(data:any){

    this.router.navigate(['/service',data,'hasan','Edit'],{queryParams:{allowEdit:this.userIdValue === 3?'1':'0'}, fragment:'Loading'});
    console.log(this.AllowBoolean);
    console.log(this.userIdValue);

  }

}
