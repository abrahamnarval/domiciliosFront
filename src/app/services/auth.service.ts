import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import jwt_decode from 'jwt-decode';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  userChange: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) { 
    this.userChange.subscribe((value) => {
      this.user = value;
    });
  }

  getUserDetails( email:string, password:string){
    //post these details to API server
    return this.http.post(`${environment.hostApi}/singIn`, {
      email,
      password
    })/*.subscribe(data=>{
      console.log(data, "is what we got from the server")
    })*/
  }

  setUser(user:any){
    this.userChange.next(user);
  }

  decodeToken(token:any){
    const user = jwt_decode(token);
    this.setUser(user);
  }

}
