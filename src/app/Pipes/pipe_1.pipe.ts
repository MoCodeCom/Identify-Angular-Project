import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'MyPipe'
})
export class pipe1 implements PipeTransform{
  transform(value:string | number) {
    if(typeof value === 'number'){
      return '£ ' + value;
    }else{
      return value;
    }

  }

}
