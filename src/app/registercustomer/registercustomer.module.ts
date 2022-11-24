import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistercustomerRoutingModule } from './registercustomer-routing.module';
import { RegistercustomerComponent } from './registercustomer.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistercustomerComponent
  ],
  imports: [
    CommonModule,
    RegistercustomerRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegistercustomerModule { }
