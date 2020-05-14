import { ServicioService } from '../../servicio.service';


import  {MaterialesInterface} from 'src/app/interfaces/materiales_interface'
import { Component, OnInit ,ViewChild,EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertarmateriales',
  templateUrl: './insertarmateriales.component.html',
  styleUrls: ['./insertarmateriales.component.css']
})
export class InsertarmaterialesComponent implements OnInit {


  Material:MaterialesInterface[];
  material:MaterialesInterface={
    id_material:'',
    nombre_material:'',
    cantidad_material:'',
    color_material:''
  }

  constructor(
    private formBuilder: FormBuilder,
      private servi: ServicioService,
      private Router: Router
  ) { }


  InsertarMaterial({value}:{value:MaterialesInterface}) {
        
     
    if(value.nombre_material==''){

      Swal.fire(
        'Error al agregar',
          'El nombre esta vacio.',
         'error'
                 )
    }else if(value.cantidad_material==''){

      Swal.fire(
        'Error al agregar',
          'La cantidad no puede estar vacia.',
         'error'
                 )

    }else if(value.color_material==''){
      Swal.fire(
        'Error al agregar',
          'El color esta vacio.',
         'error'
                 )

    }else{
      Swal.fire(
        'Material agregado con exito!',
          ' Agregado!',
         'success'
                 )
      console.log(value)
       this.servi.insertMaterial(value).then(res => {console.log(res)}).catch(err => 
  
  
         {console.log(err)});
    }
     
   }

  ngOnInit(): void {
  }

}
