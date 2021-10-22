import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  constructor(private route: ActivatedRoute,private router: Router) { 
   

  }
  

  ngOnInit(): void {
  
      console.log("product components")

  }

}
