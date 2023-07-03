import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from "rxjs";
import {ApiService} from "../../services/apiservice";
import {data} from "autoprefixer";
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any[]=[]
  token: string|undefined;
  images: any[]= [];
  masVendidos:any[]=[];



  responsiveOptions;

  constructor(private apiservice:ApiService,private router : Router) {
    this.token = undefined;
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  public send(form: NgForm): void {

    console.log(`Token [${this.token}] generated`);
  }
  ngOnInit(): void {

    this.llenarData();
    this.llenarVendidos();
    this.images = [
      {
        img: 'assets/realme9.jpg',
        alt: 'Hombre',
        text: "realme 9",
        subtext: "Camara ProLight de 108MP | Pantalla Super AMOLED de 90Hz | Procesador Snapdragon 680",
        btn: "Compra ahora"
      },
      {img: 'assets/realmeverde.webp'}

    ];


  }
  redirigirDetalle(product:any) {
    this.router.navigate(['/detalleProducto',product.id]);
  }

  redirigirRealme(){
    this.router.navigate(['/realme9']);
  }
  llenarData(){
    this.apiservice.getData().subscribe(data=>{this.data=data;console.log(this.data)})
  }
  llenarVendidos(){
    this.apiservice.getVendidos().subscribe(data=>{this.masVendidos=data;console.log(this.masVendidos)})
  }

}
