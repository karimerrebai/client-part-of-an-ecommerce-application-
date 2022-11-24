import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
priceSelection=""//prend les 2 valeurs de slider en html
 minValue=0
 maxValue=1000
 options :Options ={ floor:0,ceil:1000}//floor:minimum ,ceil:maximum
  listproduct :any
 listcategory:any
  constructor(private productservice:ProductService,private categoryservice:CategoryService) { }

  ngOnInit(): void {
    this.getallproducts()
    this.getallcategorys()

    console.log(this.options.floor)
  }
  getallproducts(){
    this.productservice.getallproducts().subscribe((res:any)=>{
      this.listproduct=res['data']
      console.log("list product :",res)
    })
  }~
  getallcategorys(){
    this.categoryservice.getallcategory().subscribe((res:any)=>{
      this.listcategory=res['data']
      console.log('list category :',res)
    })

  }
  onchangebycategory(e:any){
    this.productservice.getallproducts().subscribe((res:any)=>{
      this.listproduct=res['data'].filter((el:any)=>el.subcategory.category._id==e.target.value)//target : $event on html (category._id)
      console.log("list of product with categ:",this.listproduct)
    })

  }
  onchangebycolor(e:any){
    console.log("detected value color: ",e.target.value)
    this.productservice.getallproducts().subscribe((res:any)=>{
      this.listproduct=res['data'].filter((el:any)=>el.color==e.target.value)
      console.log("list product by color:",this.listproduct)
    })
  }

  changePrice(){
    console.log("price change:",this.priceSelection)
    let event =this.priceSelection
    this.productservice.getallproducts().subscribe((res:any)=>{
      this.listproduct=res['data']
      if(event!== undefined){
        const ListproduitByPrice =this.listproduct.filter((element :any)=> element.price >= event[0] && element.price <= event[1] )
        this.listproduct=ListproduitByPrice
        console.log('filter by price ',this.listproduct)
      }
    })
  }

}
