
import { ServicioService } from '../../servicio.service';


import  {TipdocInterface} from 'src/app/interfaces/tipdoc-interface'
import { Component, OnInit ,ViewChild,EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregaruntipdoc',
  templateUrl: './agregaruntipdoc.component.html',
  styleUrls: ['./agregaruntipdoc.component.css']
})
export class AgregaruntipdocComponent implements OnInit {
  


  
  TipoDic:TipdocInterface[];
  tipodoc:TipdocInterface={
    id_tipo_documento:'',
    nombre_tipo_documento:'',
    inicial_tipo_documento:''
  }

  


  constructor(private formBuilder: FormBuilder,
      private servi: ServicioService,
      private Router: Router) { }

    


  
    InsertarTipDoc({value}:{value:TipdocInterface}) {
        
     
       Swal.fire(
         'Tipo de documento agregado con exito!',
           ' Agregado!',
          'success'
                  )
       console.log(value)
        this.servi.insertTipDoc(value).then(res => {console.log(res)}).catch(err => 


          {console.log(err)});
        
      }
        

  ngOnInit(): void {
    
  }

}
