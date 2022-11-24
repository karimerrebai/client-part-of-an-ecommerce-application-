import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
items=[] as any
totalprice:number=0 
totalqte:number=0
formorder:FormGroup

  constructor(private cartservice:CartService ,private route :Router,private productservice:ProductService,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    // this.gettotalQte()
    //initialisation de formulaire:
    this.formorder=this.formbuilder.group({
      pricetotal:['',Validators.required],
      itemorder:['',Validators.required],
      qtetotal:['',Validators.required],
      
      date:['',Validators.required],
      //relation
      customer:['',Validators.required],
    })


    this.cartservice.loadCart()
    this.items=this.cartservice.getItems()
    console.log("items :",this.items)
  }
  customer=JSON.parse(localStorage.getItem("userconnect")!)//!:syntaxe
  
gettotal(){
   let total =0
  this.items.forEach((element:any) => {
    total+=Number(element.qte)*Number(element.price)
  });
  this.totalprice= total
  return this.totalprice
}

gettotalQte(){
  let totalqte =0
 this.items.forEach((element:any) => {
   totalqte+=Number(element.qte)
 });
 this.totalqte= totalqte
//  console.log("total",this.totalqte)
 return this.totalqte
}


addorder(){
  this.formorder.patchValue({
    customer:this.customer._id,
    pricetotal:this.totalprice,
    qtetotal:this.gettotalQte(),
    itemorder:this.items,

    //génerer la date instancé 
    date:new Date().toISOString().split("T")[0].toString()
  })
   this.productservice.submitorder(this.formorder.value).subscribe((res:any)=>{
    console.log("order :",res)
    Swal.fire('order added')
  this.route.navigateByUrl('/facture')
   })

}
}
