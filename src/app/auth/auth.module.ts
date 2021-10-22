import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './service/login.service';
import { RegisterService } from './service/register.service';
import { MaterialModuleModule } from '../material-module/material-module.module';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MaterialModuleModule,
    
  ],
  providers: [LoginService,RegisterService]
})
export class AuthModule { }
