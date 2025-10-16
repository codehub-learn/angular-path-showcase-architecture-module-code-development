import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetails } from './components/customer-details/customer-details';
import { AllCustomers } from './components/all-customers/all-customers';
import {CustomersRoutingModule} from './customer-routing-module';
import {SharedModule} from '../../shared/shared-module';
import {ProductModule} from '../product/product-module';



@NgModule({
  declarations: [
    CustomerDetails,
    AllCustomers
  ],
  imports: [
    CustomersRoutingModule,
    CommonModule,
    SharedModule,
    //ProductModule // circular dependency error
  ]
})
export class CustomerModule { }
