import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { intercepts } from './intercepter';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [intercepts]
})
export class SharedModule { }
