import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/apiservice";
import {Router} from "@angular/router";

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent implements OnInit {
  data:any[]=[]
  constructor(private apiservice:ApiService,private router : Router) { }

  ngOnInit(): void {
    this.llenarData()
  }
  redirigirDetalle(product:any) {
    this.router.navigate(['/detalleAccesorios',product.id]);
  }
  llenarData(){
    this.apiservice.getAccesorios().subscribe(data=>{this.data=data;console.log(this.data)})
  }
}
