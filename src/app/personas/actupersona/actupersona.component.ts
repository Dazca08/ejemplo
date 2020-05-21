import { ServicioService } from '../../servicio.service';


import  { PersonaInterface } from '../../interfaces/personas-interface';
import { Component, OnInit ,ViewChild,EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-actupersona',
  templateUrl: './actupersona.component.html',
  styleUrls: ['./actupersona.component.css']
})
export class ActupersonaComponent implements OnInit {


  TipDocs: any = [];
  Cargos: any = [];

  PersonaA: any = [];

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

  IdAcomparar:any
   i:number=0;
   Fechatemp:string="";
  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router
  ) { }

  buscarEditarPersona() {
    
    this.servi.getPersona('/' + this.IdAcomparar).subscribe((data: {}) => {


      this.PersonaA = data;
       this.Fechatemp=this.PersonaA[0].fecha_nacimiento_persona;
      var splited= this.Fechatemp.split("T",2);
      console.log(splited)
      this.Fechatemp=splited[0];
      this.PersonaA[0].fecha_nacimiento_persona=this.Fechatemp;
      

    }, error => { console.log(error) });

  }

    public ActualizarPersona({value}:{value:PersonaInterface}) {

    
      if(value.telefono_persona.length>10){
       Swal.fire(
         'Error al actualizar',
           '.',
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
             'Los datos han sido Actualizado ',
             'success'
            
           )
           
            this.servi.updatePersona(value).then
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
