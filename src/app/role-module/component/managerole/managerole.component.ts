import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemoveComponentComponent } from 'src/app/custom-component-module/components/remove-component/remove-component.component';
import { EditroleComponent } from '../../customcomponents/editrole/editrole.component';

import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-managerole',
  templateUrl: './managerole.component.html',
  styleUrls: ['./managerole.component.css']
})
export class ManageroleComponent implements OnInit {
  
  roles:any;
  error:any={}

  next:number = 0;
  previous:number = 0;

  constructor(private roleService: RoleService,public dialog: MatDialog) { }

  ngOnInit(): void {
    //this.getRole()
    this.getRoleByPaginations()
   
  }

  onPrevious(){
    if(this.next>0){
      this.next=this.next-1;
    }
    this.getRoleByPaginations();

  }
   onNext(){
     this.next++;
     this.getRoleByPaginations();

   }




//getRole
  getRole(){

    this.roleService.getRole().
    subscribe(res=>{
      console.log(res)
      this.roles=res
    },
   (err)=>{console.log(err)})
  }

//get Role by PAgination
  getRoleByPaginations(){
    console.log(this.next)
    this.roleService.getRoleByPaginations(this.next).subscribe(res=>{
        console.log(res)
        this.roles=res;
    },(err)=>{
      console.log(err)})
  }


//updateRole
  updateRole(mydata:any){
   let dialogRef = this.dialog.open(EditroleComponent,{width:'400px',height:'400px',data:mydata})
       dialogRef.afterClosed().subscribe(res=>{
         if(res.action==true){
           // console.log("updated",res)
            let updateRole={roleId:res.role.roleId,roleName:res.role.roleName}
            //console.log(updateRole)
             this.roleService.updateRole(updateRole).subscribe(res=>{
                 console.log("updated",res)
                 //this.getRole()
                 this.getRoleByPaginations()
             },(err)=>{console.log(err)})
            
         }
         else{ 
           console.log("Cancel")
         }
       })

  }

 //deleteRole
  deleteRole(data:any){

    let dialogRef = this.dialog.open(RemoveComponentComponent)
    dialogRef.afterClosed().subscribe(res=>{
          if(res==true){
             this.roleService.deleteRoleById(data.roleId).
             subscribe(res=>{
               console.log(res)
                this.getRole()
              },(err)=>{console.log(err)})

          }
    })
  } 
   
  


}
function EditRoleComponent(EditRoleComponent: any) {
  throw new Error('Function not implemented.');
}

