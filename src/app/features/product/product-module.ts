import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProducts } from './components/all-products/all-products';
import {ProductRoutingModule} from './product-routing-module';
import {SharedModule} from '../../shared/shared-module';
import {CustomerModule} from '../customer/customer-module';
import {ExampleService} from '../../shared/services/example-service';



@NgModule({
  declarations: [
    AllProducts
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    CustomerModule // circular dependency error
  ],
  providers: []
})
export class ProductModule { }
