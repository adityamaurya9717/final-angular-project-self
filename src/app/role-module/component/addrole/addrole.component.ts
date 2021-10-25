import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css']
})
export class AddroleComponent implements OnInit {
   
    role:any={
      roleId:'',
      roleName:''
    }
    error:any={}
    updated:any

  constructor(private roleService:RoleService) { }

  ngOnInit(): void {
  }

  roleSubmit(){
    console.log(this.role)
    this.error={}
    this.addRole()
  }

  clearForm(){
    this.role.roleId='',
    this.role.roleName=''
    this.updated=''
  }
  //addRole(role: string)
   addRole(){
       this.roleService.addRole(this.role).
       subscribe(result => {
         console.log(result)
         this.updated="Added successfully"
        },
        (err) => {
               if(err.status==409){
                   this.error.roleId="Role Id Already Exists"
                  }
         })
   }

}
