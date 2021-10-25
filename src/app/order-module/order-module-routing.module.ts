import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddorderComponent } from './components/addorder/addorder.component';
import { ManageorderComponent } from './components/manageorder/manageorder.component';
import { PendingorderComponent } from './components/pendingorder/pendingorder.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path:'order',
    component:OrderComponent,
    children:[
      {
        path: 'addorder',
        component:AddorderComponent
      },
      {
        path:'manageorder',
        component:ManageorderComponent
      },
      {
        path:'pendingorder',
        component:PendingorderComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderModuleRoutingModule { }
