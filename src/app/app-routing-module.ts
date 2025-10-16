import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./features/customer/customer-module')
      .then((m) => m.CustomerModule),
  },
  {
    path: 'products',
    loadChildren: () => import('./features/product/product-module')
      .then((m) => m.ProductModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
