import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/apiservice";
import {Router} from "@angular/router";

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent implements OnInit {
  data:any[]=[]
  constructor(private apiservice:ApiService,private router : Router) { }

  ngOnInit(): void {
    this.llenarData();
  }

  redirigirDetalle(product:any) {
    this.router.navigate(['/detalleProducto',product.id]);
  }
  llenarData(){
    this.apiservice.getData().subscribe(data=>{this.data=data;console.log(this.data)})
  }
}
