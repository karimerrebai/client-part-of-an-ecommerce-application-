import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {
favoris=[] as any //decalaration tableau 
  constructor() { }
  saveFavoris():void{
    localStorage.setItem('list_favoris',JSON.stringify(this.favoris))//convertir javascript to json //enregistrer le dans localstorage
    //key(list_favoris):value(favoris)
  }
  addToFavoris(added:any){
    this.favoris.push(added)//inserer added dans le tableau favoris
    this.saveFavoris()//sauveguarde
  }
  ItemInFavoris(item:any):boolean{
   return this.favoris.findIndex((o:any)=>o._id ===item._id)>-1 //findIndex return -1 si un element n'existe pas dans le tableau
  }
  loadFavoris():void{
    this.favoris=JSON.parse(localStorage.getItem('list_favoris')!) ?? [] //convertir json to javascript , ?? :signifie sinon
  }
  getFavoris(){
    return this.favoris
  }
  removeAfavor(item:any){
   console.log(this.favoris)
   const index =this.favoris.findIndex((o:any)=>o._id===item._id)
   if(index>-1)
   {
     this.favoris.splice(index,1)//suprimer un element(1) a partir index //exemple:At position 2(index),remove 2 item
     this.saveFavoris()
    }
  }
}
