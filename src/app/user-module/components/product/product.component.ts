import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,AfterViewInit {


  constructor(private activatedRoute:ActivatedRoute,private route:Router) { 
   console.log("routes",this.route.getCurrentNavigation()?.extras.state)

  }
  ngAfterViewInit(): void {
    console.log(history.state)

  }

  ngOnInit(): void {
  console.log(history.state)

  }

}
