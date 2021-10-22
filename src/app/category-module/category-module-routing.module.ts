import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { AddcategoryComponent } from './components/addcategory/addcategory.component';
import { CategorymanagementComponent } from './components/categorymanagement/categorymanagement.component';

const routes: Routes = [
  {
    path:'category',
    component:CategoryComponent,
    children:[
      {
        path: 'addcategory',
        component:AddcategoryComponent,
        pathMatch:'full'
      },
      {
        path:'managecategory',
        component:CategorymanagementComponent,
      }

    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryModuleRoutingModule { }
