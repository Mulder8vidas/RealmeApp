import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS} from "ng-recaptcha";
import { environment } from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'primeng/carousel';
import {RegistroComponent} from "./pages/registro/registro.component";
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DetalleComponentComponent} from "./pages/detalle-component/detalle-component.component";
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import {SmartphonesComponent} from "./pages/smartphones/smartphones.component";
import {ImageModule} from 'primeng/image';
import { DetalleAccesoriosComponent } from './pages/detalle-accesorios/detalle-accesorios.component';
import { RealmeComponent } from './pages/realme/realme.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    RegistroComponent,
    DetalleComponentComponent,
    AccesoriosComponent,
    SmartphonesComponent,
    DetalleAccesoriosComponent,
    RealmeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    NgbModule,
    NgOptimizedImage,
    CarouselModule,
    ToastModule,
    BrowserAnimationsModule,
    ImageModule
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
