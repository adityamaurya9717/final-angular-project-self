import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleModuleRoutingModule } from './role-module-routing.module';
import { RoleComponent } from './role/role.component';
import { AddroleComponent } from './component/addrole/addrole.component';
import { ManageroleComponent } from './component/managerole/managerole.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RoleService } from './services/role.service';
import { EditroleComponent } from './customcomponents/editrole/editrole.component';



@NgModule({
  declarations: [
    RoleComponent,
    AddroleComponent,
    ManageroleComponent,
   EditroleComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    RoleModuleRoutingModule
  ],
  providers: [RoleService]
})
export class RoleModuleModule { }
