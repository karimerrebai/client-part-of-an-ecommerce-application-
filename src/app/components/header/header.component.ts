import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { FavorisService } from 'src/app/favoris.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route :Router,private cartservice:CartService,private favorisservice:FavorisService) { }
items=[] as any  
favoris=[] as any //decalaration tableau 

totalprice:number=0
som : number=0 
  ngOnInit(): void {
    //cart 
    this.cartservice.loadCart()//
    this.items=this.cartservice.getItems()
    console.log("items:",this.items)
    //autre methode de calculer la total
    //for(var i of this.items ){
      //this.som+=i.price*i.qte
     //}
     
     //favoris
     this.favorisservice.loadFavoris()
     this.favoris=this.favorisservice.getFavoris()
     console.log("favoris:",this.favoris)

  }
  gettotal(){
    let total=0
    this.items.forEach((element:any)=>{
      total+=Number(element.price)*Number(element.qte)//Number():convertir element on cas element est string ou autre type
    })
    this.totalprice=total
    return total
    
  }
  removeitem(item:any){
    this.cartservice.removeItem(item)
    Swal.fire('product removed from local storage')
  }
  
  removeAfavori(fav:any){
    this.favorisservice.removeAfavor(fav)
    Swal.fire('product removed from lost of favoris!!')
  }
  logout(){
    localStorage.clear()//reset localstorage:suppression userconnect , token , state
    this.route.navigateByUrl('/login')
  }
  isConnect(){
    return localStorage.getItem('state')=="0" ? true : false 
  }
}
