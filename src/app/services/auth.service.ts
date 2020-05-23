import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: any;

  constructor(private http: HttpClient) { }

  getUserDetails( email:string, password:string){
    //post these details to API server
    return this.http.post(`${environment.hostApi}/singIn`, {
      email,
      password
    })/*.subscribe(data=>{
      console.log(data, "is what we got from the server")
    })*/
  }

  setUser(usuario:any){
    this.usuario = usuario;
  }

  getUser(){
    return this.usuario
  }

  decodeToken(token:any){
    let usuario = jwt_decode(token);
    this.setUser(usuario);
  }

}
