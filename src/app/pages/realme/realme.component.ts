import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realme',
  templateUrl: './realme.component.html',
  styleUrls: ['./realme.component.css']
})
export class RealmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  redirigir() {


    const nombreProducto = "realme 9";
    const mensaje = `Buenos dias, me interesa comprar el ${nombreProducto}`;

    const mensajeCodificado = encodeURIComponent(mensaje);

    const urlWhatsApp = `https://wa.me/51902691449?text=${mensajeCodificado}`;


    window.open(urlWhatsApp, '_blank');
  }
}
