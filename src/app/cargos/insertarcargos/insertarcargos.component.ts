import { ServicioService } from '../../servicio.service';


import  { CargoInterface } from '../../interfaces/cargos-interface';
import { Component, OnInit ,ViewChild,EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertarcargos',
  templateUrl: './insertarcargos.component.html',
  styleUrls: ['./insertarcargos.component.css']
})
export class InsertarcargosComponent implements OnInit {


  Cargos:CargoInterface[];
  cargos:CargoInterface={
    id_cargo:'',
    nombre_cargo:''

  }

  constructor(
    private formBuilder: FormBuilder,
      private servi: ServicioService,
      private Router: Router
  ) { }


  InsertarCargo({value}:{value:CargoInterface}) {
        
    if(value.nombre_cargo==''){
      Swal.fire(
        'Error al Agregar!',
          'El Nombre esta vacio.',
         'error'
                 )
    }else{
    
      Swal.fire(
        'Cargo agregado con exito!',
          ' Agregado!',
         'success'
                 )
      console.log(value)
       this.servi.insertCargo(value).then(res => {console.log(res)}).catch(err => 
  
  
         {console.log(err)});
    }
    
         
   }

  ngOnInit(): void {
  }

}
