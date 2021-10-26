import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModuleRoutingModule } from './core-module-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './main/main.component';
import { LandingComponent } from './components/landing/landing.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LandingComponent,
  ],
  imports: [
    CommonModule,
    CoreModuleRoutingModule
  ]
})
export class CoreModuleModule { }
