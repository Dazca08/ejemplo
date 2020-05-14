import { ServicioService } from '../../servicio.service';


import  {ProductoInterface} from 'src/app/interfaces/producto-interface'
import { Component, OnInit ,ViewChild,EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertarproducto',
  templateUrl: './insertarproducto.component.html',
  styleUrls: ['./insertarproducto.component.css']
})


export class InsertarproductoComponent implements OnInit {


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




  constructor(private formBuilder: FormBuilder,
    private servi: ServicioService,
    private Router: Router) { }


    InsertarProducto({value}:{value:ProductoInterface}) {

      if(value.nombre_producto==''){
        Swal.fire(
          'Error al agregar',
            'El nombre esta vacio.',
           'error'
                   )

      }else if(value.color_producto==''){
        Swal.fire(
          'Error al agregar',
            'El color esta vacio.',
           'error'
                   )

      }else if(value.talla_producto==''){
        Swal.fire(
          'Error al agregar',
            'La talla esta vacio.',
           'error'
                   )

      }else if(value.tipo_producto==''){
        Swal.fire(
          'Error al agregar',
            'No se selecciono el tipo producto.',
           'error'
                   )
      }else{
        Swal.fire(
          'Producto agregado con exito!',
            ' Agregado!',
           'success'
                   )
        console.log(value)
         this.servi.insertProducto(value).then(res => {console.log(res)}).catch(err => 
  
  
           {console.log(err)});

      }
        
     
      
       
     }

     consultaTipProductos() {
    
    
      this.servi.getTipProductos().subscribe((data: {tipdoc: []}) => {this.TipProductos = data;}, error => {console.error(error + " ")});
      
      
     
    }

  ngOnInit(): void {
    this.consultaTipProductos();
  }

}
