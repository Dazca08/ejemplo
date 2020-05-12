import { ServicioService } from '../../servicio.service';


import  {TipdocInterface} from 'src/app/interfaces/tipdoc-interface'
import { Component, OnInit ,ViewChild,EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-actuntipdoc',
  templateUrl: './actuntipdoc.component.html',
  styleUrls: ['./actuntipdoc.component.css']
})
export class ActuntipdocComponent implements OnInit {

  MiTipDocE: any = [];


  
   TipoDic:TipdocInterface[];
  tipodoc:TipdocInterface={
    id_tipo_documento:'',
    nombre_tipo_documento:'',
    inicial_tipo_documento:''
  }


  
 IdAcomparar:any



  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router
  ) { }

   //--------------------------------------------------------------

   buscarEditarTipDoc() {
    
    this.servi.getTipDoc('/' + this.IdAcomparar).subscribe((data: {}) => {


      this.MiTipDocE = data;
      
      

    }, error => { console.log(error) });
    
}
  
  //--------------------------------------------------------------

  public ActualizarTipDoc({value}:{value:TipdocInterface}) {

    
 if(value.inicial_tipo_documento.length>2){
  Swal.fire(
    'Error al actualizar',
      'Las iniciales solo pueden tener 2 letras.',
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
        'El Tipo dedocumento ha sido Actualizado ',
        'success'
       
      )
      
       this.servi.updateTipDoc(value).then
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
