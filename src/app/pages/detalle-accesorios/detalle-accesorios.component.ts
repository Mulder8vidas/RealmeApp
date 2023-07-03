import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/apiservice";

@Component({
  selector: 'app-detalle-accesorios',
  templateUrl: './detalle-accesorios.component.html',
  styleUrls: ['./detalle-accesorios.component.css']
})
export class DetalleAccesoriosComponent implements OnInit {
  idaccesorio:number=0;
  dataccesorio:any;
  logeado=false;
  constructor(private router:ActivatedRoute,private service:ApiService) { }

  ngOnInit(): void {
    this.router.params.subscribe(value => {

      this.idaccesorio=value["id"]
      this.service.detalleAccesorios(this.idaccesorio).subscribe(value1 => {
        this.dataccesorio=value1;
      })
      if(localStorage.getItem("logeado")!=null){
        this.logeado=true;
      }
    })
  }
  redirigir() {

    /* window.location.href = "https://wa.me/51986686983?text=Me%20interesa%20el%20auto%20que%20estás%20vendiendo%20{{dataproduct.descripcion}}"
 */
    const nombreProducto = this.dataccesorio.nombre;
    const mensaje = `Me interesa el producto ${nombreProducto}`;

    const mensajeCodificado = encodeURIComponent(mensaje);

    const urlWhatsApp = `https://wa.me/51902691449?text=${mensajeCodificado}`;


    window.open(urlWhatsApp, '_blank');
  }
}
