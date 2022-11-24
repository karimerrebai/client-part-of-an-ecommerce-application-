import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailproductRoutingModule } from './detailproduct-routing.module';
import { DetailproductComponent } from './detailproduct.component';
import { FormsModule } from '@angular/forms';
import { QuantityproductDirective } from '../quantityproduct.directive';


@NgModule({
  declarations: [
    DetailproductComponent,
    QuantityproductDirective
  ],
  imports: [
    CommonModule,
    DetailproductRoutingModule,
    FormsModule
  ]
})
export class DetailproductModule { }
