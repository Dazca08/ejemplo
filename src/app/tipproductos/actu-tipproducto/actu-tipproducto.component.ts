import { ServicioService } from '../../servicio.service';


import  {TipoProductoInterface} from 'src/app/interfaces/tipproducto-interface'
import { Component, OnInit ,ViewChild,EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-actu-tipproducto',
  templateUrl: './actu-tipproducto.component.html',
  styleUrls: ['./actu-tipproducto.component.css']
})
export class ActuTipproductoComponent implements OnInit {

  MiTipProducto: any = [];


  
   TipoProducto:TipoProductoInterface[];
  tipoproducto:TipoProductoInterface={
    id_tipo_producto:'',
    nombre_tipo_producto:''
  }


  
 IdAcomparar:any


  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router
  ) { }


  //--------------------------------------------------------------

  buscarEditarTipProducto() {
    
    this.servi.getTipProducto('/' + this.IdAcomparar).subscribe((data: {}) => {


      this.MiTipProducto = data;
      
      

    }, error => { console.log(error) });
    
}



 //--------------------------------------------------------------

 public ActualizarTipProducto({value}:{value:TipoProductoInterface}) {

    
  if(value.nombre_tipo_producto == ""){
   Swal.fire(
     'Error al actualizar',
       'El nombre esta vacio.',
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
         'El Tipo de Producto ha sido Actualizado ',
         'success'
        
       )
       
        this.servi.updateTipProducto(value).then
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
