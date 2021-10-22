import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/catalog-module/service/catalog.service';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  productInfo:any;

  constructor(
   private catalogService: CatalogService,
   private testService:TestService,
  ) { }

  ngOnInit(): void {
    //catalog
    this.testService.getCatalog().subscribe((res)=>{
      console.log(res)
      this.productInfo = res
    },(err)=>{
      console.log(err)
    })
  }

}
