import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
items =[] as any 
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.loadCart()
    this.items=this.cartservice.getItems()
    
  }
  userconnect=JSON.parse(localStorage.getItem('userconnect')!)
  date=new Date().toISOString().split("T")[0].toString()
  subtotal(){
    let total = 0
    this.items.forEach((element:any)=>{
      total+=Number(element.price)*Number(element.qte)
    })
    return total
  }
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('facture.pdf');
    });
  }

}
