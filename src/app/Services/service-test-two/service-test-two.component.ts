import { Component, OnInit } from '@angular/core';
import { serviceOne } from '../serviceOne.service';

@Component({
  selector: 'app-service-test-two',
  templateUrl: './service-test-two.component.html',
  styleUrls: ['./service-test-two.component.css'],
  providers:[serviceOne]
})
export class ServiceTestTwoComponent implements OnInit {
statusData:string='';
strData:string=this.statusData;
fullDate = new Date();
dateData =this.fullDate.getDate()+"/"+this.fullDate.getMonth()+"/"+  this.fullDate.getFullYear() ;
money_1 = 55.30;
testPipe = 'testing pipe';

  constructor(private Cservice:serviceOne) {

  }

  ngOnInit(): void {
    console.log("start");
    this.Cservice.btnState.subscribe((data)=>{
      console.log(data +" from data.");
    });
  }

  GetValue():string{
    this.strData=this.statusData;
    //this.Cservice.dataFromService_2 = this.strData;
    this.Cservice.dataFromService_2.emit(this.strData);
    return this.strData;
  }

}
