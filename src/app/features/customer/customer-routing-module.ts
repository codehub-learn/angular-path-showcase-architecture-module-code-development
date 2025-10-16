import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerDetails} from './components/customer-details/customer-details';
import {AllCustomers} from './components/all-customers/all-customers';

const routes: Routes = [
  {path: "all-customers", component: AllCustomers},
  {path: "customer-details", component: CustomerDetails}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
