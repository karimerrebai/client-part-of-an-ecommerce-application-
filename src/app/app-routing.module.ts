import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'listproduct', loadChildren: () => import('./listproduct/listproduct.module').then(m => m.ListproductModule) },
  { path: 'detailproduct', loadChildren: () => import('./detailproduct/detailproduct.module').then(m => m.DetailproductModule) },
  { path: 'shoppingcart', loadChildren: () => import('./shoppingcart/shoppingcart.module').then(m => m.ShoppingcartModule) },
  { path: 'registercustomer', loadChildren: () => import('./registercustomer/registercustomer.module').then(m => m.RegistercustomerModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: 'facture', loadChildren: () => import('./facture/facture.module').then(m => m.FactureModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
