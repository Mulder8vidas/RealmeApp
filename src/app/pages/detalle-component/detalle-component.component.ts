import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/apiservice";
import {data} from "autoprefixer";


@Component({
  selector: 'app-detalle-component',
  templateUrl: './detalle-component.component.html',
  styleUrls: ['./detalle-component.component.css']
})
export class DetalleComponentComponent implements OnInit {


  idproducto:number=0;
  dataproduct:any;

  logeado=false;
  constructor(private router:ActivatedRoute,private service:ApiService) { }


  ngOnInit(): void {
    this.router.params.subscribe(value => {

      this.idproducto=value["id"]
      this.service.detalleProducto(this.idproducto).subscribe(value1 => {
        this.dataproduct=value1;
      })
      if(localStorage.getItem("logeado")!=null){
        this.logeado=true;
      }
    })
  }
  redirigir() {


    const nombreProducto = this.dataproduct.nombre;
    const mensaje = `Buenos dias, me interesa comprar el ${nombreProducto}`;

    const mensajeCodificado = encodeURIComponent(mensaje);

  const urlWhatsApp = `https://wa.me/51902691449?text=${mensajeCodificado}`;


    window.open(urlWhatsApp, '_blank');
}}
