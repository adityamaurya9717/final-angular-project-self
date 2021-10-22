import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const headerData={headers:{"Content-Type": "application/json"}}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
    url:string = 'http://localhost'
   doLogin(data:any):Observable<any>{

     return this.httpClient.post(this.url,data,headerData);
   }
}
