import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const headerData={headers:{"Content-Type": "application/json"}}
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }
  url:string = 'http://localhost:8080/register'
  
  doRegister(data:any):Observable<any>{

    return this.httpClient.post(this.url,data,headerData);
  }
}
