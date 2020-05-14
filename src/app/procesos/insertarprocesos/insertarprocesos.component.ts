import { ServicioService } from '../../servicio.service';


import  {ProcesosInterface} from 'src/app/interfaces/procesos-interface'
import { Component, OnInit ,ViewChild,EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertarprocesos',
  templateUrl: './insertarprocesos.component.html',
  styleUrls: ['./insertarprocesos.component.css']
})
export class InsertarprocesosComponent implements OnInit {


  Proceso:ProcesosInterface[];
  proceso:ProcesosInterface={
    id_proceso:'',
    nombre_proceso:''
  }

  constructor(
    private formBuilder: FormBuilder,
      private servi: ServicioService,
      private Router: Router
  ) { }


  InsertarProceso({value}:{value:ProcesosInterface}) {
        
     if(value.nombre_proceso==''){
      Swal.fire(
        'Error al agregar',
          'El nombre esta vacio',
         'error'
                 )
     }else{
      Swal.fire(
        'Proceos agregado con exito!',
          ' Agregado!',
         'success'
                 )
      console.log(value)
       this.servi.insertProceso(value).then(res => {console.log(res)}).catch(err => 
  
  
         {console.log(err)});
     }
    
     
   }
     

ngOnInit(): void {
 
}

}
