import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }
   url="http://localhost:8080/category/"

  addCategory(category:any):Observable<any>{
       return this.httpClient.post(this.url,category)
  }

  getCategories():Observable<any>{
    return this.httpClient.get(this.url)
  }
  getCategoryById(id:number):Observable<any>{
    return this.httpClient.get(this.url+id);
  }
  updateCategoryById(id:number, category:any):Observable<any>{

    return this.httpClient.put(this.url+id, category)
  }

  deleteCategoryById(id:number):Observable<any>{
    return this.httpClient.delete(this.url+id);
  }
}
