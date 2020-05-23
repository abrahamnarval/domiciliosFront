import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario:any;

  constructor(private Auth: AuthService, private router: Router) {
    this.usuario = this.Auth.getUser();
   }

  ngOnInit() {
    this.usuario = this.Auth.getUser();
  }

}
