import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerDetails} from './components/customer-details/customer-details';

const routes: Routes = [
  {path: "customer-details", component: CustomerDetails}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
