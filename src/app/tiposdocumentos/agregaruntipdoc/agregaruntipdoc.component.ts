
import { ServicioService } from '../../servicio.service';


import  {TipdocInterface} from 'src/app/interfaces/tipdoc-interface'
import { Component, OnInit ,ViewChild,EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
//import { Http } from '@angular/http';
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

  //InsertarGTipDoc: FormGroup;


  constructor(private formBuilder: FormBuilder,
      private servi: ServicioService,
      private Router: Router) { }

  
    InsertarTipDoc({value}:{value:TipdocInterface}) {
        //console.log("31  Inserta");
    
       // var datosvalo2 = this.InsertarGTipDoc.getRawValue()['textTipDoc'];
        //var datosvalo3 = this.InsertarGTipDoc.getRawValue()['textiniTipDoc'];
        //console.log("Td", datosvalo2,datosvalo3)
    
        /*var cadena = {
          "nombre_tipo_documento":datosvalo2,
          "inicial_tipo_documento":datosvalo3};*/
        
        //console.log(" 39 " + cadena);
     
       Swal.fire(
         'Tipo de documento agregado con exito!',
           ' Agregado!',
          'success'
                  )
       console.log(value)
        this.servi.insertTipDoc(value).then(res => {console.log(res)}).catch(err => 


          {console.log(err)});
        /*this.servi.insertTipDoc(cadena).then(res => {console.log(res)}).catch(err => 


          {console.log(err)});*/
      }
        

  ngOnInit(): void {
    /*this.InsertarGTipDoc = this.formBuilder.group(
      {
        textTipDoc: [],
        textiniTipDoc: []
      });*/
  }

}
