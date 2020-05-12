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
        
     
    Swal.fire(
      'Tipo de documento agregado con exito!',
        ' Agregado!',
       'success'
               )
    console.log(value)
     this.servi.insertPersona(value).then(res => {console.log(res)}).catch(err => 


       {console.log(err)});
     
   }

   consultaTipDocs() {
    
    
    this.servi.getTipDocs().subscribe((data: {tipdoc: []}) => {this.TipDocs = data;}, error => {console.error(error + " ")});
    
    
   
  }

  ngOnInit(): void {

    this.consultaTipDocs();

  }

}
