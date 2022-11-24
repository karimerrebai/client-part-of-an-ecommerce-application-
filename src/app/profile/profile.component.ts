import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
listorder :any
list :any
  constructor(private orderservice :OrderService) { }
  user=JSON.parse(localStorage.getItem('userconnect')!)
  ngOnInit(): void {
    this.getallorders(this.user)
  }
 
 getallorders(user:any){
 this.orderservice.getallorder().subscribe((res:any)=>{
  this.listorder=res["data"]
  console.log("list of all orders :",this.listorder)
  this.list = this.listorder.filter((o:any)=>(o.customer===user._id))
  console.log("list order of userconnect:",this.list)
 })

 }
}
