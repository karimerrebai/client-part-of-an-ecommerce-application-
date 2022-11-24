import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup
submitted:any=false
  constructor(private authenservice:AuthenticationService,private formbuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    //formbuilder:initialisation de formulaire
    this.form=this.formbuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })

    
  }
  onSubmit():void{
    this.submitted=true
    this.authenservice.login(this.form.value).subscribe((res:any)=>{
      console.log("login:",res)//retourne resultat comme backend  
      if(res.message==="logged")//message avec le resultal dans le backend 
      {
        localStorage.setItem('userconnect',JSON.stringify(res.user))//user:resultat dans backend//creation un objet item
        localStorage.setItem('token',res.token)
        localStorage.setItem("state","0")
        Swal.fire("logging")
        this.route.navigateByUrl("/checkout")
      }
      
    
    },
    err=>{
      Swal.fire({
        icon:'error',
        title:'user not found',
        text:"email invalid",
        footer:"password invalid"
      })
      console.log(err)
    }
    )
  }

}
