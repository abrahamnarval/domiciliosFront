import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  constructor(private Auth: AuthService, private router:Router) {

  }

  ngOnInit() {
    const userToken = localStorage.getItem('userToken');
    if(userToken){
      this.Auth.decodeToken(userToken);
      // this.router.navigate(['/admin'])
    }else{
      // this.router.navigate(['/login'])
    }
  }

}
