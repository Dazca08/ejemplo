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
     'Error al actualizar',
       'El material esta vacio.',
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

  ngOnInit(): void {
  }

}
