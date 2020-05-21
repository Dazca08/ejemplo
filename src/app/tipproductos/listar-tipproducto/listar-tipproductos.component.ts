import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-tipproductos',
  templateUrl: './listar-tipproductos.component.html',
  styleUrls: ['./listar-tipproductos.component.css']
})
export class ListarTipproductosComponent implements OnInit {

  TipProductos: any = [];
  PageActual:number=1;

  constructor(
    private formBuilder: FormBuilder,
      private servi: ServicioService,
      Router: Router
  ) { }

  consultaTipProductos() {
    
    
    this.servi.getTipProductos().subscribe((data: {tipdoc: []}) => {this.TipProductos = data;}, error => {console.error(error + " ")});
    
    
   
  }

  ngOnInit(): void {
    this.consultaTipProductos();
  }

}
