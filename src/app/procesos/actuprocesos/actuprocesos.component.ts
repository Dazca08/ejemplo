import { ServicioService } from '../../servicio.service';


import  {ProcesosInterface} from 'src/app/interfaces/procesos-interface'
import { Component, OnInit ,ViewChild,EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-actuprocesos',
  templateUrl: './actuprocesos.component.html',
  styleUrls: ['./actuprocesos.component.css']
})
export class ActuprocesosComponent implements OnInit {


  MiProceso: any = [];


  
   Proceso:ProcesosInterface[];
  proceso:ProcesosInterface={
    id_proceso:'',
    nombre_proceso:''
    
  }


  
 IdAcomparar:any

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router
  ) { }



  //--------------------------------------------------------------

  buscarEditarProceso() {
    
    this.servi.getProceso('/' + this.IdAcomparar).subscribe((data: {}) => {


      this.MiProceso = data;
      
      

    }, error => { console.log(error) });
    
}


//--------------------------------------------------------------

public ActualizarProceso({value}:{value:ProcesosInterface}) {

    
  if(value.nombre_proceso==''){
   Swal.fire(
     'Error al actualizar',
       'El campo nombre esta vacio.',
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
         'El proceso ha sido Actualizado ',
         'success'
        
       )
       
        this.servi.updateProceso(value).then
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


  ngOnInit(): void {
  }

}
