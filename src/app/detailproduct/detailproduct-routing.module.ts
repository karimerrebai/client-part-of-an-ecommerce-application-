import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailproductComponent } from './detailproduct.component';

const routes: Routes = [{ path: '', component: DetailproductComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailproductRoutingModule { }
