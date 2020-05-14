import { ServicioService } from '../../servicio.service';


import  {ProduccionInterface} from 'src/app/interfaces/producciones-interface'
import { Component, OnInit ,ViewChild,EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-actuproducciones',
  templateUrl: './actuproducciones.component.html',
  styleUrls: ['./actuproducciones.component.css']
})
export class ActuproduccionesComponent implements OnInit {

  MiProduccion: any = [];

  Materiales: any = [];
  Productos: any = [];
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

  IdAcomparar:any;

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router
  ) { }

  
  //--------------------------------------------------------------

  buscarEditarProduccion() {
    
    this.servi.getProduccion('/' + this.IdAcomparar).subscribe((data: {}) => {


      this.MiProduccion = data;
      
      

    }, error => { console.log(error) });
    
}


//--------------------------------------------------------------

public ActualizarProduccion({value}:{value:ProduccionInterface}) {

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
      Swal.fire({
        title: 'Esta seguro?',
        text: "Desea guardar los cambios?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, guardar!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
      
            'Guardado!',
            'La produccion ha sido Actualizado ',
            'success'
           
          )
          
           this.servi.updateproduccion(value).then
            (
              res => {
                console.log("res",res)
              }
            ).catch(err => {
              console.log(err)
            }) 
       
        }
      })
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
