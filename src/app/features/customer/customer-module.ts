import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetails } from './components/customer-details/customer-details';
import { AllCustomers } from './components/all-customers/all-customers';
import {CustomersRoutingModule} from './customer-routing-module';



@NgModule({
  declarations: [
    CustomerDetails,
    AllCustomers
  ],
  imports: [
    CustomersRoutingModule,
    CommonModule
  ]
})
export class CustomerModule { }
