import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/apiservice";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[MessageService]
})
export class RegistroComponent implements OnInit {

  constructor(private service:ApiService,private messageService:MessageService) { }

  ngOnInit(): void {
  }
  FormRegistro= new FormGroup({
    username :new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    nombre:new FormControl(),
    apellido:new FormControl()
  })

  guardar(){
    let data=this.FormRegistro.getRawValue();
    this.service.registrar(data).subscribe(value => {
      this.messageService.add({severity:'success', summary: 'Success', detail: value.respuesta});

    })
  }

}
