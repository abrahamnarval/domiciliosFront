import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductDetails(){
    //post these details to API server
    return this.http.get(`${environment.hostApi}/getProducts`);
  }
}
