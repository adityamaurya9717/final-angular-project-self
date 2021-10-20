import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient:HttpClient) { 
  }
  url:string = 'http://localhost:8080/catalog/'


  getCatalog():Observable<any> {

    return this.httpClient.get(this.url)
  }
}
