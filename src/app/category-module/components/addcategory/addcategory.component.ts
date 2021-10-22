import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../service/category.service';


@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
    category:Category=new Category();
    categoryForm=this.fb.group({
      categoryId:[this.category.categoryId,Validators.required],
      categoryName:[this.category.categoryName,Validators.required]
    })

    error:any={

    }
  constructor(private fb: FormBuilder,private categoryService:CategoryService) { }

  ngOnInit(): void {
  }
 //add category
  addcategory(){

    if(this.categoryForm.valid ){
        console.log(this.category,this.categoryForm)
        this.categoryService.addCategory(this.category).subscribe((res)=>{
           console.log(res)
        },(err)=>{
           console.log(err)
        })
    }
    else{ console.log("input required")}    
  }
  
//clear form
  clearForm(){
    
    this.categoryForm.reset()
    
  }

}

class Category{
  categoryId:number | undefined;
  categoryName:string | undefined;
  
}
