import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { AddCatalogComponent } from './components/catalog/catalog.component';
import { ManagecatalogComponent } from './components/managecatalog/managecatalog.component';

const routes: Routes = [

  {
    path:'catalog',
    component:CatalogComponent,
    children:[
      {
        path: 'addcatalog',
        component:AddCatalogComponent,
      },
      {
        path:'managecatalog',
        component:ManagecatalogComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogModuleRoutingModule { }
