import { state } from '@angular/animations';
import { TypeCheckCompiler } from '@angular/compiler/src/view_compiler/type_check_compiler';
import { AfterContentInit, AfterViewInit, Component, DoCheck, HostListener, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,DoCheck{

 /* @HostListener("click")
   onClick(){
     
     if(this.showDiv){
       this.showDiv=false
     }
   }*/
  showDiv=false
  options:any=["Laptop","Books","Toys","Mobile","Clothes"]
   
  previousValue="ALL"
  filter:string="All"
  mystate:any={productState:"ALL"}
  constructor( private testService:TestService,private categoryService:CategoryService,private router:Router,private route:ActivatedRoute) { }
  
  
  ngDoCheck(): void {
    
   /* if(this.previousValue==this.filter)return;

    this.previousValue=this.filter
    //console.log(this.previousValue,this.filter)
    this.mystate={productState:this.filter}
   // this.router.navigateByUrl('/user/products',{name:{myname:"aditya"}})
   this.router.routeReuseStrategy.shouldReuseRoute=()=>false
   
     this.router.navigate(['products'],{relativeTo:this.route,replaceUrl:true})*/

    
  }

  ngOnInit(): void {

     //catalog
     this.testService.getCatalog().subscribe((res)=>{
       console.log(res)
     },(err)=>{
       console.log(err)
     })
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

}
