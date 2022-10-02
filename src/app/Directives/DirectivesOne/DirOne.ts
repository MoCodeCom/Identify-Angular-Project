import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[app-DirOne]'
})
export class DirOne implements OnInit{
constructor(private elementRef:ElementRef){}

ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'red';
    this.elementRef.nativeElement.style.color = 'white';
}
}