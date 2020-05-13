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
        
     
      Swal.fire(
        'Producto agregado con exito!',
          ' Agregado!',
         'success'
                 )
      console.log(value)
       this.servi.insertProducto(value).then(res => {console.log(res)}).catch(err => 


         {console.log(err)});
       
     }

  ngOnInit(): void {
  }

}
