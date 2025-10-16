import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonComponent} from './components/common-component/common-component';



@NgModule({
  declarations: [
    CommonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonComponent
  ]
})
export class SharedModule { }
