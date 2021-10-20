import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { UserRoutingModule } from './user-routing.module';
import { LogoutComponent } from './components/logout/logout.component';
import { UserComponent } from './user/user.component';
import { ROUTES } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import {HttpClientModule,HttpClient} from '@angular/common/http'
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LogoutComponent,
    UserComponent,
    CartComponent,
    OrderComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UserRoutingModule,
    HttpClientModule,
    SharedModule
    
  ],
  exports:[UserComponent,UserRoutingModule,LogoutComponent]
})
export class UserModuleModule { }
