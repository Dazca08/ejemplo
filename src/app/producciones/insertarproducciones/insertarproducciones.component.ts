import {ServicioService} from '../../servicio.service';
import  {ProduccionInterface} from 'src/app/interfaces/producciones-interface'
import { Component, OnInit ,ViewChild,EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertarproducciones',
  templateUrl: './insertarproducciones.component.html',
  styleUrls: ['./insertarproducciones.component.css']
})
export class InsertarproduccionesComponent implements OnInit {

  Productos: any = [];
  Materiales: any = [];
  Personas: any = [];
  Procesos: any = [];


  Produccion:ProduccionInterface[];
  produccion:ProduccionInterface={
    id_produccion:'',
    material_produccion:'',
    producto_produccion:'',
    persona_produccion:'',
    proceso_produccion:'',
    fecha_inicio_produccion:'',
    fecha_fin_produccion:'',
    fecha_total_produccion:''
  }

  constructor(
    private formBuilder: FormBuilder,
      private servi: ServicioService,
      private Router: Router
  ) { }



  InsertarProduccion({value}:{value:ProduccionInterface}) {
        
     if(value.material_produccion==''){
      Swal.fire(
        'Error al agregar',
          'Debe seleccionar un material.',
         'error'
                 )
     }else if(value.producto_produccion==''){
      Swal.fire(
        'Error al agregar',
          'Debe seleccionar un producto.',
         'error'
                 )
     }else if(value.persona_produccion==''){
      Swal.fire(
        'Error al agregar',
          'Debe seleccionar una persona.',
         'error'
                 )
     }else if(value.proceso_produccion==''){
      Swal.fire(
        'Error al agregar',
          'Debe seleccionar un proceso.',
         'error'
                 )
     }else if(value.fecha_inicio_produccion==''){
      Swal.fire(
        'Error al agregar',
          'Debe seleccionar una fecha de incio.',
         'error'
                 )
     }else if(value.fecha_fin_produccion==''){
      Swal.fire(
        'Error al agregar',
          'Debe seleccionar una fecha de fin.',
         'error'
                 )
     }else{
      Swal.fire(
        'Produccion agregada con exito!',
          ' Agregado!',
         'success'
                 )
      console.log(value)
       this.servi.insertproduccion(value).then(res => {console.log(res)}).catch(err => 
  
  
         {console.log(err)});
     }
    
     
   }

   consultaMateriales() {
    
    
    this.servi.getMateriales().subscribe((data: {tipdoc: []}) => {this.Materiales = data;}, error => {console.error(error + " ")});
    
    
   
  }

  consultaProductos() {
    
    
    this.servi.getProductos().subscribe((data: {tipdoc: []}) => {this.Productos = data;}, error => {console.error(error + " ")});
    
    
   
  }

  consultaPersonas() {
    
    this.servi.getPersonas().subscribe((data: {personas: []}) => {this.Personas = data;}, error => {console.error(error + " ")});

  }

  consultaProcesos() {
    
    
    this.servi.getProcesos().subscribe((data: {proceso: []}) => {this.Procesos = data;}, error => {console.error(error + " ")});
    
    
   
  }


  ngOnInit(): void {
    this.consultaMateriales();
    this.consultaProductos();
    this.consultaPersonas();
    this.consultaProcesos();
  }

}
