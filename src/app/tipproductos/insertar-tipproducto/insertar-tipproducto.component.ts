import { ServicioService } from '../../servicio.service';


import  { TipoProductoInterface } from 'src/app/interfaces/tipproducto-interface';
import { Component, OnInit ,ViewChild,EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-tipproducto',
  templateUrl: './insertar-tipproducto.component.html',
  styleUrls: ['./insertar-tipproducto.component.css']
})
export class InsertarTipproductoComponent implements OnInit {


  TipoProducto:TipoProductoInterface[];
  tipoproducto:TipoProductoInterface={
    id_tipo_producto:'',
    nombre_tipo_producto:''

  }


  constructor(
    private formBuilder: FormBuilder,
      private servi: ServicioService,
      private Router: Router
  ) { }



  InsertarTipProducto({value}:{value:TipoProductoInterface}) {
        
     
    Swal.fire(
      'Tipo de Producto agregado con exito!',
        ' Agregado!',
       'success'
               )
    console.log(value)
     this.servi.insertTipProducto(value).then(res => {console.log(res)}).catch(err => 


       {console.log(err)});
     
   }

  ngOnInit(): void {
  }

}
