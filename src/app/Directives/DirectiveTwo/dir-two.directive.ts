import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[app-DirTwo]'
})
export class DirTwoDirective implements OnInit {

  constructor( private element:ElementRef ,private rend:Renderer2) { }

  ngOnInit(): void {
    this.rend.setStyle(this.element.nativeElement, 'backgroundColor','black');
    this.rend.setStyle(this.element.nativeElement, 'color','yellow');
  }

}
