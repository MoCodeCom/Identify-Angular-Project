
import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[app-HostListener]'
})
export class HostListenerDirective implements OnInit {
/// The alternative way to set a style without renderer is @HostBinding() for property style.
@HostBinding('style.backgroudColor') backgroundColorHostBinding:string = 'yellow';
@Input() mouseOver:string='transparent';
@Input() mouseLeave:string='transparent';

  constructor(private element:ElementRef, private rend:Renderer2) { }
  
  ngOnInit(): void {
    this.rend.setStyle(this.element.nativeElement,'backgroundColor','skyblue');
    this.rend.setStyle(this.element.nativeElement,'color','blue');
  }

  //Build function with decoration @HostListener(DomEvent) 
  @HostListener('mouseenter') 
  mouseover(event:Event)
  {
    this.rend.setStyle(this.element.nativeElement, 'backgroundColor', this.mouseOver);
    //this.backgroundColorHostBinding = 'red';
    this.rend.setStyle(this.element.nativeElement, 'color','white');
  } 
//'darkblue'
  @HostListener('mouseleave') 
  mouseleave(event:Event)
  {
    this.rend.setStyle(this.element.nativeElement,'backgroundColor', this.mouseLeave);
    this.rend.setStyle(this.element.nativeElement,'color','blue');
  }
  //'skyblue'
}
