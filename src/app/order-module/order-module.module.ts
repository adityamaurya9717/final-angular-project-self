import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderModuleRoutingModule } from './order-module-routing.module';
import { OrderComponent } from './order/order.component';
import { AddorderComponent } from './components/addorder/addorder.component';
import { ManageorderComponent } from './components/manageorder/manageorder.component';
import { PendingorderComponent } from './components/pendingorder/pendingorder.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    OrderComponent,
    AddorderComponent,
    ManageorderComponent,
    PendingorderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MaterialModuleModule,
    MatDialogModule,
    MatButtonModule,
    OrderModuleRoutingModule
  ]
})
export class OrderModuleModule { }
