import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryModuleRoutingModule } from './category-module-routing.module';
import { AddcategoryComponent } from './components/addcategory/addcategory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CategorymanagementComponent } from './components/categorymanagement/categorymanagement.component';
import { CategoryComponent } from './category/category.component';
import { CustomComponentModuleModule } from '../custom-component-module/custom-component-module.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CategoryComponent,
    AddcategoryComponent,
    CategorymanagementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModuleModule,
    MatDialogModule,
    ReactiveFormsModule,
    CustomComponentModuleModule,
    CategoryModuleRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
  
  
})
export class CategoryModuleModule { }
