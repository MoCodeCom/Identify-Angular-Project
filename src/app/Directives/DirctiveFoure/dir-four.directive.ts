import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDirFour]'
})
export class DirFourDirective {

//To create dirctive in the template we should use both of templateRef and viewcontainerRef.

@Input() set appDirFour(data:boolean){
if(data){
  this.vcref.createEmbeddedView(this.templateRef);
}else{
  this.vcref.clear();
}
}
  constructor(private templateRef:TemplateRef<any>, private vcref:ViewContainerRef) { }

}
