import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarproducto',
  templateUrl: './listarproducto.component.html',
  styleUrls: ['./listarproducto.component.css']
})
export class ListarproductoComponent implements OnInit {

 


  
  PageActual:number=1;
  Productos: any = [];
  


  

  constructor(
      private formBuilder: FormBuilder,
      private servi: ServicioService,
      Router: Router) { }

  

   consultaProductos() {
    
    
    this.servi.getProductos().subscribe((data: {tipdoc: []}) => {this.Productos = data;}, error => {console.error(error + " ")});
    
    
   
  }

 

 

  ngOnInit() {

   this.consultaProductos();


  }


}