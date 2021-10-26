import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog'
import { data } from 'jquery';
import { Catalog } from '../../models/catalog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product:any = new Catalog();
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public dialogRef:MatDialogRef<EditComponent>) { }

  ngOnInit(): void {

    this.product=this.data;
    this.product.productImage=null
    console.log(this.data)
  }

  onAction(action:any){
    if(action==true){
          let myobj={...this.product,action:true}
          console.log(myobj)
        this.dialogRef.close(myobj)
    }
    else{ 
      this.dialogRef.close({data:this.product,action:false})
        

    }

  }

}
