import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalog } from '../models/catalog';

const headerData={headers: {'Content-Type': 'multipart/form-data'}}

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  
  constructor(private httpClient:HttpClient) { }
   url:string = 'http://localhost:8080/catalog/addcatalog'
  addCatalog(catalog:any):Observable<any> {
    
    return this.httpClient.post(this.url,catalog)

  }
}
