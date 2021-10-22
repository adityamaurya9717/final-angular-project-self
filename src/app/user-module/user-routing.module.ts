import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router'
import { LogoutComponent } from './components/logout/logout.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';

const secondRoutes:Routes=[
  {
  path:'user',
  component:UserComponent,
  children:[
         {path:'products', component:ProductsComponent},
         {path:'cart',component:CartComponent}
      
        ]

  },
  
  
  
]
   
  
  
  
  


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(secondRoutes)
  ],
  exports:[RouterModule]
})
export class UserRoutingModule { }
