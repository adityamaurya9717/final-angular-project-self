import { Component, OnInit } from '@angular/core';
import { Catalog } from '../../models/catalog';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

   product:Catalog=new Catalog();
  constructor() { }

  ngOnInit(): void {
  }
  addProduct(){
    console.log(this.product)

  }

}
