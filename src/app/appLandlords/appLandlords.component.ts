import { Component } from "@angular/core";

@Component({
    selector:'landlordinfo',
    templateUrl:'./appLandlords.html',
    styleUrls:['./appLandlords.component.css']
})

export class LandlordInfo{

nameComponent:string = 'String';
idComponent:number = 10;
allowBtn:boolean = true;
isinfoavailable = "There is no data!"
avaBoolean = false;
inputValue = "";
DefaultPlaceholder:string = "Please enter value...";
DirctiveBoolean:boolean = false;
ExistData:string = "The name is exist."
checkDirctiveBoolean:boolean = false;
arrList=["Mohammed","Ahmed","Rasha"];

constructor(){
    this.IsAllowedBtn();
}

idEvent():number{
return this.idComponent;
}

IsAllowedBtn(){
setTimeout(()=>{
    this.allowBtn = false;
},3000);
}

IsInfoAvailable(){
    if(this.avaBoolean){
        this.avaBoolean = false;
    }else{
        this.avaBoolean = true;
    }


    if(this.avaBoolean){

        this.isinfoavailable ="The data is available now...";
    }else{
        this.isinfoavailable = "There is no data!"
    }
    
}

OnEnterVal(event:any){
//this.inputValue = ;
//console.log(<HTMLInputElement>event.target.value);
this.inputValue = (<HTMLInputElement>event.target).value
}

GetLandlordName():string{
    return this.isinfoavailable + " " +this.DefaultPlaceholder;
}

GetDirctive(){
this.DirctiveBoolean=true;
}

GetDataByDirctive(){
    if(this.checkDirctiveBoolean){
        this.checkDirctiveBoolean = false;
    }else{
        this.checkDirctiveBoolean = true;
    }
}

GetColor():string{
    console.log(this.checkDirctiveBoolean);
    return this.checkDirctiveBoolean === true?"red":"yellow";
}

Getloop(){
    this.arrList.push("Hasan");
}

}