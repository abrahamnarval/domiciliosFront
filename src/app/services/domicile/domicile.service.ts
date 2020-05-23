import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DomicileService {

  constructor(private http: HttpClient) { }

  getDomicilesDetails(){
    //get these details to API server
    return this.http.get(`${environment.hostApi}/getDomiciles`);
  }

  getDomicilesByUserId(userId:any){
    //get these details to API server
    return this.http.get(`${environment.hostApi}/getDomicilesByUserId/${userId}`);
  }

  updateDomicile(domicileId:number, statusId: number){
    return this.http.put(`${environment.hostApi}/updateDomicile`, {
      id: domicileId,
      status_id: statusId
    })
  }

}
