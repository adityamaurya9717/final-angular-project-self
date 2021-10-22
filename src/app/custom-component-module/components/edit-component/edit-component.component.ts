import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {

  newForm:any={
    categoryId:'',
    categoryName:''
  }

  constructor(public dialogRef: MatDialogRef<EditComponentComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.newForm.categoryId = this.data.categoryId;
    this.newForm.categoryName = this.data.categoryName;
  }

  onSuccess(){
      console.log("dialog success");
      this.dialogRef.close({data:this.newForm,success:true})
      
    
  }

  onCancel(){
     console.log("dialog cancel")
     this.dialogRef.close({data:this.newForm,success:false})
  }

}
