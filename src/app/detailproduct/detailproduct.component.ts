import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {
product:any
items=[] as any
qte_user:number = 2
id=this.activeroute.snapshot.params["id"]
  constructor(private productservice :ProductService,private activeroute:ActivatedRoute,private cartservice:CartService) { }

  ngOnInit(): void {
    console.log("id:",this.id)
    this.getproductbyid()
    
  }
getproductbyid(){
  this.productservice.getproductbyid(this.id).subscribe((res:any)=>{
    this.product=res['data']
    console.log("product detail :",res['data'])
    console.log("reference :",res['data'].reference)

  })
}
increment(){
  // if(this.qte_user<this.product.qte)
  this.qte_user++
}
descriment(){
  if(this.qte_user>1)
  this.qte_user--
}
addtocart(prod:any){
  
  //on ultilise subscribe lorsqu'on a consommer un methode a travers backend
  if(!this.cartservice.itemInCart(prod))//si item n'est existe dans le local storage
prod.qte=this.qte_user
this.cartservice.addToCart(prod)
this.items=this.cartservice.getItems()
console.log(this.items)
Swal.fire('product added')

}

}
