import { ServicioService } from '../../servicio.service';


import  {MaterialesInterface} from 'src/app/interfaces/materiales_interface'
import { Component, OnInit ,ViewChild,EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-actumateriales',
  templateUrl: './actumateriales.component.html',
  styleUrls: ['./actumateriales.component.css']
})
export class ActumaterialesComponent implements OnInit {

  MiMaterial: any = [];


  Material:MaterialesInterface[];
  material:MaterialesInterface={
    id_material:'',
    nombre_material:'',
    cantidad_material:'',
    color_material:''
  }


  IdAcomparar:any

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router
  ) { }


  //--------------------------------------------------------------

  buscarEditarMaterial() {
    
    this.servi.getMaterial('/' + this.IdAcomparar).subscribe((data: {}) => {


      this.MiMaterial = data;
      
      

    }, error => { console.log(error) });
    
}


//--------------------------------------------------------------

public ActualizarMaterial({value}:{value:MaterialesInterface}) {

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
         'El Material ha sido Actualizado ',
         'success'
        
       )
       
        this.servi.updateMaterial(value).then
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
