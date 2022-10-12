import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  MessageByRoute:string='';
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    //this.MessageByRoute = this.router.snapshot.data['message'];
    this.router.data.subscribe((data:Data)=>{
      this.MessageByRoute = data['message'];
    });

  }

}
