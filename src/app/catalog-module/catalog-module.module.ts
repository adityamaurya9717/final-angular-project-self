import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogModuleRoutingModule } from './catalog-module-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CatalogComponent } from './catalog/catalog.component';
import { AddCatalogComponent } from './components/catalog/catalog.component';


@NgModule({
  declarations: [
    CatalogComponent,
    AddCatalogComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CatalogModuleRoutingModule,
    
  ]
})
export class CatalogModuleModule { }
