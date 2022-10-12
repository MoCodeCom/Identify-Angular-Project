import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth.service';
import { AuthGuard } from 'src/AuthGuardSerivce.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.login();
  }

  logout(){
    this.auth.logout();
  }

}
