import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LogoutComponent } from './user-module/components/logout/logout.component';
import { UserComponent } from './user-module/user/user.component';

const routes: Routes = [
  {
      path:'',
      loadChildren:()=>import('./core-module/core-module.module').then(m=>m.CoreModuleModule)
  },

  {
    path:'admin',
    loadChildren:()=>import('./admin-module/admin-module.module').then(m=>m.AdminModuleModule)
  },


   {
     path:'auth',
     loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)

   },


  {
    path:'user',
    loadChildren: ()=>import('./user-module/user-module.module').then(m=>m.UserModuleModule)
    
  },
  {
    path:'catalog',
    loadChildren: ()=>import('./catalog-module/catalog-module.module').then(m=>m.CatalogModuleModule)
  }
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
