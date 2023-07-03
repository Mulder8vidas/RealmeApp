import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../services/apiservice";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private elRef: ElementRef,private service:ApiService) {

    if(localStorage.getItem("logeado")!=null){
      this.service.logeadoUser.next(true);

    }else{
      this.service.logeadoUser.next(false);
    }
    if(localStorage.getItem("usuario")!=null){
      this.service.nombreUser.next(localStorage.getItem("usuario"));

    }else{
      this.service.nombreUser.next("");
    }


  }

  logeado=false;
  nombreuser: any="";
  ngOnInit(): void {
    this.service.$obsLogeado.subscribe(value => {
      this.logeado=value;
    })
    this.service.$obsNombre.subscribe(value => {
      this.nombreuser=value;
    })
  }

  redirigir() {
    this.router.navigate(['/login']);
  }
  RedigirSmartphones(){
    this.router.navigate(['/smartphones'])
  }
  RedigirAccesorios(){
    this.router.navigate(['/accesorios'])
  }
  closeMenu() {
    const menuBtn = this.elRef.nativeElement.querySelector('#menu-btn');
    menuBtn.checked = false;
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(["/login"])
    this.service.logeadoUser.next(false);
  }
}
