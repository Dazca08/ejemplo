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
        
     
    Swal.fire(
      'Produccion agregada con exito!',
        ' Agregado!',
       'success'
               )
    console.log(value)
     this.servi.insertproduccion(value).then(res => {console.log(res)}).catch(err => 


       {console.log(err)});
     
   }


  ngOnInit(): void {
  }

}
