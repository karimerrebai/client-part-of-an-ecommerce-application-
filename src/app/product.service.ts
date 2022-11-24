import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  //autorisation:
  token =localStorage.getItem("token")!
  headersoption =new HttpHeaders({
    Authorization:'Bearer '+this.token//'Bearer+espace'
  })
  
  getallproducts(){
    return this.http.get(`${environment.baseurl}product/getAllProducts` , {headers:this.headersoption})//getallproducts with autorisation 
  }
  getproductbyid(id:any){
    return this.http.get(`${environment.baseurl}product/getProductById/${id}`)
  }
  submitorder(order:any){
 return this.http.post(`${environment.baseurl}order/addOrder`,order)
  }
}
