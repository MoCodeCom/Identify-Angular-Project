import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirctives',
  templateUrl: './dirctives.component.html',
  styleUrls: ['./dirctives.component.css']
})
export class DirctivesComponent implements OnInit {
  btnBoolean = false;
  even=[1,3,5];
  odd=[2,4,6];
  valueSwitch =117;   //the value that should be shown in the DOM under switch dirction.
  constructor() { }

  ngOnInit(): void {
  }

}
