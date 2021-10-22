import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponentComponent } from './components/edit-component/edit-component.component';
import { FormsModule } from '@angular/forms';
import { RemoveComponentComponent } from './components/remove-component/remove-component.component';



@NgModule({
  declarations: [
    EditComponentComponent,
    RemoveComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [EditComponentComponent]
})
export class CustomComponentModuleModule { }
