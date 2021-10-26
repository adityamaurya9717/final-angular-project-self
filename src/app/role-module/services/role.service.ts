import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const headerData={headers:{"Content-Type": "application/json"}}

@Injectable({
  providedIn: 'root'
})
export class RoleService {

   url:string="http://localhost:8080/role/"
  constructor(private httpClient:HttpClient) { }


   //add role 
   addRole(role:any):Observable<any>{
    return this.httpClient.post(this.url,role,headerData)
   }

   //getrole
     getRole():Observable<any>{
       return this.httpClient.get(this.url,headerData)
     }

    //getroleByID
         getRoleByID(id:number):Observable<any>{
           return this.httpClient.get(this.url+id,headerData)
         }
    //getRole By PAgination
     getRoleByPaginations(pagenumber:number):Observable<any>{
        let uri=this.url+"page/"+pagenumber;
        //console.log(uri)
      return this.httpClient.get(uri,headerData)

     }
  
    //update role
      updateRole(role:any):Observable<any>{

        return this.httpClient.put(this.url,role,headerData)
      }

     //deleteRole
     deleteRoleById(id:number):Observable<any>{
       return this.httpClient.delete(this.url+id,{responseType:'text'})
     } 

      


}
