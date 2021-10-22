import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditComponentComponent } from 'src/app/custom-component-module/components/edit-component/edit-component.component';
import { RemoveComponentComponent } from 'src/app/custom-component-module/components/remove-component/remove-component.component';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-categorymanagement',
  templateUrl: './categorymanagement.component.html',
  styleUrls: ['./categorymanagement.component.css']
})
export class CategorymanagementComponent implements OnInit {
  
  categories:any

  constructor(private categoryService: CategoryService,public dialog:MatDialog) { }
   
  ngOnInit(): void {
       
    this.categoryService.getCategories().subscribe(res=>{
      console.log(res)
      this.categories=res;
    },(err)=>{
      console.log(err)
    })

  }

//edit
  onEdit(mydata:any){
       console.log("mydata",mydata)
       let dialogRef=this.dialog.open(EditComponentComponent,{width:'400px',height:'400px',data:mydata})

       dialogRef.afterClosed().subscribe(res=>{
              
            if(res.success==true){
              console.log(res)
              let myobj={...res.data}
              this.categoryService.updateCategory(myobj).subscribe(res=>{
                console.log(res)
              },(err)=>{
                console.log(err)
              })
            }
            

       })
  }

  //on remove
  onRemove(data:any){

      let dialogRef=this.dialog.open(RemoveComponentComponent,{width:'400px'});

      dialogRef.afterClosed().subscribe(action=>{
                   if(action==true){
                         console.log("removed")
                   }       
                  })
    /* this.categoryService.deleteCategoryById(data.categoryId).subscribe(res=>{
       console.log(res)
     },(err)=>{
       console.log(err)
     })*/
  }

}
