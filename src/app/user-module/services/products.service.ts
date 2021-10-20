import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    url:string=""
  constructor(private httpClient:HttpClient) { }

  showProducts():Observable<any>{
     return this.httpClient.get(this.url)
  }





}
