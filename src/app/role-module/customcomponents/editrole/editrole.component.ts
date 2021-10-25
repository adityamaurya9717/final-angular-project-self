import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-editrole',
  templateUrl: './editrole.component.html',
  styleUrls: ['./editrole.component.css']
})
export class EditroleComponent implements OnInit {

   updatedRole:any={
     roleId:'',
     roleName:''
   }

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef:MatDialogRef<EditroleComponent>) { }

  ngOnInit(): void {
    this.updatedRole.roleId = this.data.roleId;
    this.updatedRole.roleName = this.data.roleName;
  }

  actionType(action:any){
    if(action===true){
      
      this.dialogRef.close({role:this.updatedRole,action:true});
    }
    else{ 
      
      this.dialogRef.close({role:this.updatedRole,action:false});
    }

  }

}
