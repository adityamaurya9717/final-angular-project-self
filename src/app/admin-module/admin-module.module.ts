import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { CatalogModuleModule } from '../catalog-module/catalog-module.module';
import { CategoryModuleModule } from '../category-module/category-module.module';


@NgModule({
  declarations: [
    DashboardAdminComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule
  ]
})
export class AdminModuleModule { }
