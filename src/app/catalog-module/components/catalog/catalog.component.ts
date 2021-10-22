import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Catalog } from '../../models/catalog';
import { CatalogService } from '../../service/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class AddCatalogComponent implements OnInit {
  product:any = new Catalog();
  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {}
  addProduct() {
    var myform = document.forms[0]
    
    
     let newForm=JSON.stringify(this.product);
        newForm=JSON.parse(newForm);
        console.log(newForm);   

      let data=  new FormData(myform)

      console.log(data);

        

    
      

       

    this.catalogService.addCatalog(data).subscribe(
      (res) => {
         console.log(res)
      },
      (err) => {
        console.log(err)
      }
    );
  }
}
