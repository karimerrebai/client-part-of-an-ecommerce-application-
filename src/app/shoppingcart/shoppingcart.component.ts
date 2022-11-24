import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
listproduct:any
items=[] as any
qte_shop:number=2
  constructor(private productservice:ProductService,private cartservice:CartService) { }

  ngOnInit(): void {
    this.getallproducts()
  }
getallproducts(){
  this.productservice.getallproducts().subscribe((res:any)=>{
    this.listproduct=res['data']
    console.log('listproducts:',this.listproduct)
  })
}

  
}


