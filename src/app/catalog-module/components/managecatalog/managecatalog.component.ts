import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../service/catalog.service';
import {MatDialogModule,MatDialog} from '@angular/material/dialog'
import { DetailComponent } from '../../customcomponents/detail/detail.component';
import { data } from 'jquery';
import { RemoveComponentComponent } from 'src/app/custom-component-module/components/remove-component/remove-component.component';
import { EditComponent } from '../../customcomponents/edit/edit.component';

@Component({
  selector: 'app-managecatalog',
  templateUrl: './managecatalog.component.html',
  styleUrls: ['./managecatalog.component.css']
})
export class ManagecatalogComponent implements OnInit {
   catalog:any=[];
  constructor(private catalogService: CatalogService,public dialog: MatDialog) { }

  ngOnInit(): void {

    this.catalogService.getCatalog()
    .subscribe((res=>{console.log(res);this.catalog=res}),
    (err)=>{console.log(err)})
  }


  detail(product:any){
    let dialogRef=this.dialog.open(DetailComponent,{width:'550px',height:'550px',data:product})

  }


 //onEdit()
   onEdit(product:any){
     let dialogRef=this.dialog.open(EditComponent,{width:'550px',height:'550px',data:product})

   }

   //onRemove()
   onRemove(index:any){
    // let dialogRef=this.dialog.open(RemoveComponentComponent)
     this.catalog=this.catalog.filter((d:any,i:any)=> {
                                       if(i!=index) return d
                                           })
     console.log(this.catalog)

   }

   


}
