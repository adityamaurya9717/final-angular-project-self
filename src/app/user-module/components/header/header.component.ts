import { state } from '@angular/animations';
import { TypeCheckCompiler } from '@angular/compiler/src/view_compiler/type_check_compiler';
import { AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, HostListener, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { TestService } from '../../services/test.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

 /* @HostListener("click")
   onClick(){
     
     if(this.showDiv){
       this.showDiv=false
     }
   }*/
  showDiv=false
  options:any=["Laptop","Books","Toys","Mobile","Clothes"]
  
  catalog:any;
  
  mystate:any={productState:"ALL"}
  constructor( 
    private testService:TestService,
    private categoryService:CategoryService,
    private router:Router,
    private route:ActivatedRoute,
    ) { }
  
  
  
  ngOnInit(): void {

       //catetogy 
      this.categoryService.getCategory().subscribe((res)=>{
         this.options=res.map((option:any)=>{ return option.categoryName})
         console.log(res)
       },(err)=>{
         console.log(err)
       })


  }
  
  
  show(event:Event){
    this.showDiv=!this.showDiv
    event.stopPropagation()
  }

  searchItem="" 
  searchProduct(){
         
     console.log(this.searchItem,this.route)
     //this.router.navigate(['user/user/products'],{queryParams:{search:this.searchItem}})
      
  }

}
