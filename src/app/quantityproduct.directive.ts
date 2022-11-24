import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appQuantityproduct]'
})
export class QuantityproductDirective {
  @Input('qte') qte:any //input:transferer les données de classe mére vers classe child
  @Input('qteuser') qteuser : any 
  constructor(private render:Renderer2,private el :ElementRef ) { }
  @HostListener("keyup")//gestion d'évenement: keyup:évenement
  setClick(){
    if(this.qteuser<=this.qte){
      this.render.setStyle(this.el.nativeElement,"backgroundColor","green")
    }
    else{
      this.render.setStyle(this.el.nativeElement,"backgroundColor","red")
    }
  }


}
