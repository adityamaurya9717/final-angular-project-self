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
   url:string = 'http://localhost:8080/catalog/'

   //add catalog
  addCatalog(catalog:any):Observable<any> {
    
    return this.httpClient.post(this.url+"addcatalog",catalog)

  }

  //get catalog
  getCatalog():Observable<any> {

    return this.httpClient.get(this.url,{headers: {'Content-Type':'application/json'}})
  }
}
