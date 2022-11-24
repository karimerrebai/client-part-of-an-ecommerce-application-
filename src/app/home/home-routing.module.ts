import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from '../checkout/checkout.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { DetailproductComponent } from '../detailproduct/detailproduct.component';
import { FactureComponent } from '../facture/facture.component';
import { ListproductComponent } from '../listproduct/listproduct.component';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { RegistercustomerComponent } from '../registercustomer/registercustomer.component';
import { ShoppingcartComponent } from '../shoppingcart/shoppingcart.component';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent ,children:[
  {path:'',component:LayoutComponent},//affichage layout par default 
  {path:'listproduct',component:ListproductComponent},
  {path:'detailproduct/:id',component:DetailproductComponent},
  {path:'shoppingcart',component:ShoppingcartComponent},
  {path:'login',component:LoginComponent},
  {path:'registercustomer',component:RegistercustomerComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'facture',component:FactureComponent},
  {path:'profile',component:ProfileComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
