import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { Login } from '../auth/model/login';
import { RegisterComponent } from '../auth/register/register.component';
import { LandingComponent } from './components/landing/landing.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
   {
      path:'',
      component: MainComponent,
    
  
      children:[{
        path:'login',
        component: LoginComponent,
      },
      {
        path:'landing',
        component:LandingComponent,
      },
      {
        path:'register',
        component: RegisterComponent

       }]

   }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreModuleRoutingModule { }
