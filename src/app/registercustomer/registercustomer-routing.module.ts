import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistercustomerComponent } from './registercustomer.component';

const routes: Routes = [{ path: '', component: RegistercustomerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistercustomerRoutingModule { }
