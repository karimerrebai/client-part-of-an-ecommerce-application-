import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items=[] as any ;//decalaration tableau
  constructor() { }
  addToCart(addedItem:any){
    this.items.push(addedItem)//inserer addedItem dans le tableau items
    this.saveCart()//enregistrement
  }
  itemInCart(item:any):boolean {
return this.items.findIndex((o:any)=>o._id === item._id)>-1 // findIndex return -1 si un element n'existe pas dans le tableau
  }
  loadCart():void{
    this.items=JSON.parse(localStorage.getItem("cart_items")!) ?? []//convertir json to javascript ,??:signifie sinon
  }
  getItems(){
    return this.items
  }
  saveCart():void{
 localStorage.setItem('cart_items',JSON.stringify(this.items))//convertir javascript to json//enregistrer le dans localstorage
 //key(cart_items) : value(items)
  }
  removeItem(item:any){
    console.log(this.items)
    const index =this.items.findIndex((o:any)=>o._id ===item._id)//test si item existe dans items ou non 

    if(index >-1)//item existe dans items
    {
      this.items.splice(index,1)//supprimer un element (1) a partir index  //exemple: At position 2(index), remove 2 items:
      this.saveCart()
    }
  }
}
