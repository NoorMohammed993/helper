import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { MerchantComponent } from './merchant/merchant.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent,
  pathMatch: 'full',
}, {
  path: 'admin-dashboard',
  component: AdminComponent,
  pathMatch: 'full',
}, {
  path: 'merchant-dashboard',
  component: MerchantComponent,
  pathMatch: 'full',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const components = [AdminComponent, MerchantComponent, LoginComponent];
