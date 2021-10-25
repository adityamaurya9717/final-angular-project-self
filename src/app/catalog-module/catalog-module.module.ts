import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogModuleRoutingModule } from './catalog-module-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CatalogComponent } from './catalog/catalog.component';
import { AddCatalogComponent } from './components/catalog/catalog.component';
import { ManagecatalogComponent } from './components/managecatalog/managecatalog.component';
import { DetailComponent } from './customcomponents/detail/detail.component';
import { MatDialogModule } from '@angular/material/dialog';

import { EditComponent } from './customcomponents/edit/edit.component';


@NgModule({
  declarations: [
    CatalogComponent,
    AddCatalogComponent,
    ManagecatalogComponent,
    DetailComponent,
    EditComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    CatalogModuleRoutingModule,
    
  ]
})
export class CatalogModuleModule { }
