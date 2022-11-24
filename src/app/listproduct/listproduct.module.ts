import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListproductRoutingModule } from './listproduct-routing.module';
import { ListproductComponent } from './listproduct.component';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListproductComponent
  ],
  imports: [
    CommonModule,
    ListproductRoutingModule,
    Ng5SliderModule,
    FormsModule 
  ]
})
export class ListproductModule { }
