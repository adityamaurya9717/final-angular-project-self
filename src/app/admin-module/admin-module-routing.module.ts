import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from '../catalog-module/catalog/catalog.component';
import { CategoryComponent } from '../category-module/category/category.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardAdminComponent,
    children: [
         {
           path:'category',
           loadChildren: ()=>import('../category-module/category-module.module').then(m=>m.CategoryModuleModule)
         }
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
