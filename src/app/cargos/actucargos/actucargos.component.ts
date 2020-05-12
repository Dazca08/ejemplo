import { ServicioService } from '../../servicio.service';


import  {CargoInterface} from 'src/app/interfaces/cargos-interface'
import { Component, OnInit ,ViewChild,EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-actucargos',
  templateUrl: './actucargos.component.html',
  styleUrls: ['./actucargos.component.css']
})
export class ActucargosComponent implements OnInit {


  MiCargo: any = [];


  
  Cargos:CargoInterface[];
 cargos:CargoInterface={
   id_cargo:'',
   nombre_cargo:''
   
 }


 
IdAcomparar:any


  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router
  ) { }


  //--------------------------------------------------------------

  buscarEditarCargo() {
    
    this.servi.getCargo('/' + this.IdAcomparar).subscribe((data: {}) => {


      this.MiCargo = data;
      
      

    }, error => { console.log(error) });
    
}


 //--------------------------------------------------------------

 public ActualizarCargo({value}:{value:CargoInterface}) {

    
  if(value.nombre_cargo == " "){
   Swal.fire(
     'Error al actualizar',
       'El campo esta vacio, por favor intente de nuevo.',
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
         'El Cargo ha sido Actualizado ',
         'success'
        
       )
       
        this.servi.updateCargo(value).then
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
