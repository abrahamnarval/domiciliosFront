import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error:string;
  constructor(private Auth: AuthService, private router:Router) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value

    this.Auth.getUserDetails(email, password).subscribe(data => {
      if(data){
        let dataFormat = JSON.stringify(data)
        let dataParsed = JSON.parse(dataFormat)
        this.Auth.decodeToken(dataParsed.token);
        localStorage.setItem('userToken', dataParsed.token);
        this.router.navigate(['/admin'])
      }
    }, (error) => {
      console.log(error)
      this.error = error.error.message;
    })
  }

}
