import { ServicioService } from '../../servicio.service';


import  {ProductoInterface} from 'src/app/interfaces/producto-interface'
import { Component, OnInit ,ViewChild,EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-actuproducto',
  templateUrl: './actuproducto.component.html',
  styleUrls: ['./actuproducto.component.css']
})
export class ActuproductoComponent implements OnInit {

  MiProducto: any = [];
  TipProductos: any = [];


  
   Producto:ProductoInterface[];
  producto:ProductoInterface={
    id_producto:'',
    nombre_producto:'',
    descripcion_producto:'',
    color_producto:'',
    talla_producto:'',
    tipo_producto:''
  }


  IdAcomparar:any

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router
  ) { }


//--------------------------------------------------------------

buscarEditarProducto() {
    
  this.servi.getProducto('/' + this.IdAcomparar).subscribe((data: {}) => {


    this.MiProducto = data;
    
    

  }, error => { console.log(error) });
  
}


//--------------------------------------------------------------

public ActualizarProducto({value}:{value:ProductoInterface}) {

    
  if(value.nombre_producto == ""){
   Swal.fire(
     'Error al actualizar',
       'El campo nombre esta vacio.',
      'error'
              )
 
  }else if(value.color_producto==''){
    Swal.fire(
      'Error al actualizar',
        'El campo color esta vacio.',
       'error'
               )
       
   }else if(value.talla_producto==''){
    Swal.fire(
      'Error al actualizar',
        'El campo talla esta vacio.',
       'error'
               )

   }else if(value.tipo_producto==''){
    Swal.fire(
      'Error al actualizar',
        'No se selecciono ningun tipo de producto.',
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
          'El Producto ha sido Actualizado ',
          'success'
         
        )
        
         this.servi.updateProducto(value).then
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

  consultaTipProductos() {
    
    
    this.servi.getTipProductos().subscribe((data: {tipdoc: []}) => {this.TipProductos = data;}, error => {console.error(error + " ")});
    
    
   
  }

  ngOnInit(): void {
    this.consultaTipProductos();
  }

}
