import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
  login(requestlogin:any){
    return this.http.post(`${environment.baseurl}login`,requestlogin)
  }
  registercustomer(customer:any){
   return this.http.post(`${environment.baseurl}registerCustomer`,customer)
  }
  
}
