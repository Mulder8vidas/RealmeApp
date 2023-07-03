import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from "../../services/apiservice";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {LoginModel} from "../../model/loginModel";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: string="";
  constructor(private adminService : ApiService, private router : Router) {

    if(localStorage.getItem("logeado")){
      this.adminService.logeadoUser.next(true);
    }else{
      this.adminService.logeadoUser.next(false);
    }
  }


  public send(form: NgForm): void {


    console.log(`Token [${this.token}] generated`);
  }
  ngOnInit(): void {
    if(localStorage.getItem("logeado")!=null){
      this.router.navigate(['/smartphones'])
    }
  }
  form= new FormGroup({
    email :new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  redirigirRegistro() {
    this.router.navigate(['/registro']);
  }
  Login(){

    let usuario=this.form.controls.email.value;
    let clave=this.form.controls.password.value;

    let data:LoginModel={
      username:usuario==null ? "":usuario,
      password:clave==null ? "":clave
    }
    this.adminService.postData(data).subscribe(value => {
      alert(value.respuesta);
      if(value.respuesta=="Usuario Logeado"){
        this.router.navigate([''])
        localStorage.setItem("logeado","1")
        localStorage.setItem("usuario",usuario==null ? "":usuario)
        this.adminService.nombreUser.next(usuario==null ? "":usuario)
        this.adminService.logeadoUser.next(true)
      }else{
        localStorage.clear();
        this.adminService.logeadoUser.next(false)
      }



    })


  }}
