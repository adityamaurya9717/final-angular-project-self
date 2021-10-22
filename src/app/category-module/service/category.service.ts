import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const headerData={headers:{"Content-Type": "application/json"}}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }
   url="http://localhost:8080/category/"

  addCategory(category:any):Observable<any>{
       return this.httpClient.post(this.url,category,headerData)
  }

  getCategories():Observable<any>{
    return this.httpClient.get(this.url,headerData)
  }
  getCategoryById(id:number):Observable<any>{
    return this.httpClient.get(this.url+id,headerData);
  }
  updateCategory(category:any):Observable<any>{

    return this.httpClient.put(this.url,category)
  }

  deleteCategoryById(id:number):Observable<any>{
    return this.httpClient.delete(this.url+id);
  }
}
