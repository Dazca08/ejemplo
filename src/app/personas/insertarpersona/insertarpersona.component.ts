import { Component, OnInit,ViewChild,EventEmitter, Output } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { PersonaInterface } from '../../interfaces/personas-interface';
import { TiposDocumentosComponent } from '../../tiposdocumentos/tipos-documentos/tipos-documentos.component';

import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertarpersona',
  templateUrl: './insertarpersona.component.html',
  styleUrls: ['./insertarpersona.component.css']
})
export class InsertarpersonaComponent implements OnInit {

  TipDocs: any = [];
  Cargos: any = [];
  
  Personas:PersonaInterface[];
  MiPersona:PersonaInterface={
    id_persona: '',
    tip_doc_persona: '',
    num_documento_persona: '',
    nombre1_persona: '',
    nombre2_persona: '',
    apellido1_persona: '',
    apellido2_persona: '',
    fecha_nacimiento_persona: '',
    correo_persona: '',
    telefono_persona:'',
    sexo_persona:'',
    cargo_persona:''
  }

  constructor(
    private formBuilder: FormBuilder,
      private servi: ServicioService,
      private Router: Router
  ) { }

  

  InsertarPersona({value}:{value:PersonaInterface}) {
        
     if(value.tip_doc_persona==''){
      Swal.fire(
        'Error al Agregar',
          'No se selecciono un tipo de documento.',
         'error'
                 )
     }else if(value.num_documento_persona==''){

      Swal.fire(
        'Error al Agregar',
          'No se ingreso un tipo de documento.',
         'error'
                 )

     }else if(value.nombre1_persona==''){

      Swal.fire(
        'Error al Agregar',
          'No se ingreso un nombre.',
         'error'
                 )
       

     }else if(value.apellido1_persona==''){
      Swal.fire(
        'Error al Agregar',
          'No se ingreso un apellido.',
         'error'
                 )
     }else if(value.telefono_persona==''){
      Swal.fire(
        'Error al Agregar',
          'No se ingreso un telefono.',
         'error'
                 )
     }else if(value.cargo_persona==''){
      Swal.fire(
        'Error al Agregar',
          'No se ingreso un cargo.',
         'error'
                 )
     }else if(value.fecha_nacimiento_persona==''){
      Swal.fire(
        'Error al Agregar',
          'No se ingreso una fecha de nacimiento.',
         'error'
                 )
       
     }else{
      
     
      Swal.fire(
        'Persona agregada con exito!',
          ' Agregado!',
         'success'
                 )
      console.log(value)
       this.servi.insertPersona(value).then(res => {console.log(res)}).catch(err => 
  
  
         {console.log(err)});
     }
     
   }

   consultaTipDocs() {
    
    
    this.servi.getTipDocs().subscribe((data: {tipdoc: []}) => {this.TipDocs = data;}, error => {console.error(error + " ")});
    
    
   
  }

  consultaCargos() {
    
    
    this.servi.getCargos().subscribe((data: {tipdoc: []}) => {this.Cargos = data;}, error => {console.error(error + " ")});
    
    
   
  }



  ngOnInit(): void {

    this.consultaTipDocs();
    this.consultaCargos();

  }

}
