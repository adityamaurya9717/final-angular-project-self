import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }
  url:string = 'http://localhost:8080/category/'
  getCategory():Observable<any>{
   return this.httpClient.get(this.url)
  }
}
