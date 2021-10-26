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

  isUpdated=false;
  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {}

   clearForm(): void {
     this.product=new Catalog();
     this.isUpdated=false;
   }



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
         this.isUpdated=true
      },
      (err) => {
        console.log(err)
      }
    );
  }
}
