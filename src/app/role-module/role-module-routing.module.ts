import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddroleComponent } from './component/addrole/addrole.component';
import { ManageroleComponent } from './component/managerole/managerole.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  {
    path:'role',
    component:RoleComponent,
    children: [
      {
        path: 'addrole',
        component: AddroleComponent,
      },
      {
        path: 'managerole',
        component: ManageroleComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleModuleRoutingModule { }
