import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogModuleRoutingModule } from './catalog-module-routing.module';
import { CatalogComponent } from './components/catalog/catalog.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    CatalogModuleRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CatalogModuleModule { }
