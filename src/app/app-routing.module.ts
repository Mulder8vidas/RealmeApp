import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";

import {RegistroComponent} from "./pages/registro/registro.component";
import {DetalleComponentComponent} from "./pages/detalle-component/detalle-component.component";
import {SmartphonesComponent} from "./pages/smartphones/smartphones.component";
import {AccesoriosComponent} from "./pages/accesorios/accesorios.component";
import {DetalleAccesoriosComponent} from "./pages/detalle-accesorios/detalle-accesorios.component";
import {RealmeComponent} from "./pages/realme/realme.component";

const routes: Routes = [
  {path : '', component :HomeComponent},
  {path : 'login', component :LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'detalleProducto/:id',component:DetalleComponentComponent},
  {path:'smartphones',component:SmartphonesComponent},
  {path:'accesorios',component:AccesoriosComponent},
  {path:'detalleAccesorios/:id',component:DetalleAccesoriosComponent},
  {path:'realme9',component:RealmeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
