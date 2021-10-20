import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryModuleRoutingModule } from './category-module-routing.module';
import { CategoryComponent } from './components/category/category.component';
import { AddcategoryComponent } from './components/addcategory/addcategory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    CategoryComponent,
    AddcategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModuleModule,
    ReactiveFormsModule,

    CategoryModuleRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
  
  
})
export class CategoryModuleModule { }
