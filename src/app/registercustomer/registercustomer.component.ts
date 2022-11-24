import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css']
})
export class RegistercustomerComponent implements OnInit {
submitted:any =false
form:FormGroup
fileToUpload:Array<File>=[]// push file in a array
  constructor(private authservice:AuthenticationService,private formbuilder:FormBuilder,private route :Router) { }

  ngOnInit(): void {
    this.form=this.formbuilder.group({
      fullname:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      password:['',Validators.required],
      address:['',Validators.required],
      cin:['',Validators.required],
      city:['',Validators.required],
    })
  }
  //inserer une seul image
  handleFileInput(files:any){
    this.fileToUpload=<Array<File>>files.target.files //target:event en ts <-> event on html
    console.log(this.fileToUpload)
  }


  onSubmit():void{
    this.submitted=true
    let formdata =new FormData()
    formdata.append('fullname',this.form.value.fullname)
    formdata.append('email',this.form.value.email)
    formdata.append('password',this.form.value.password)
    formdata.append('phone',this.form.value.phone)
    formdata.append('address',this.form.value.address)
    formdata.append('city',this.form.value.city)
    formdata.append('cin',this.form.value.cin)
    //insertion l'image
    formdata.append("photo",this.fileToUpload[0])

    this.authservice.registercustomer(formdata).subscribe((res:any)=>{
      console.log(res)
      Swal.fire('register customer successfully')
      this.route.navigateByUrl('/login')
    })

  }
}

