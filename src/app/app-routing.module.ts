import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './user-module/components/logout/logout.component';
import { UserComponent } from './user-module/user/user.component';

const routes: Routes = [
  {
    path:'user',
    loadChildren: ()=>import('./user-module/user-module.module').then(m=>m.UserModuleModule)
    
  },
  {
    path:'catalog',
    loadChildren: ()=>import('./catalog-module/catalog-module.module').then(m=>m.CatalogModuleModule)
  },
  {
    path:'category',
    loadChildren: ()=>import('./category-module/category-module.module').then(m=>m.CategoryModuleModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
