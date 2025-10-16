import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllProducts} from './components/all-products/all-products';

const routes: Routes = [
  {path: "all-products", component: AllProducts},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
