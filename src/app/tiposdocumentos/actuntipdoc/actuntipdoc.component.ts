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
  selector: 'app-actuntipdoc',
  templateUrl: './actuntipdoc.component.html',
  styleUrls: ['./actuntipdoc.component.css']
})
export class ActuntipdocComponent implements OnInit {

  MiTipDocE: any = [];


  //ActualizarATipDoc: FormGroup;
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
    
     
   // var filtoEvalor = this.ActualizarATipDoc.getRawValue()['ActualizarIdipDoc'];
    //console.log("iServicio 43 " + filtoEvalor + " ID " + id );


     
    {

    
    this.servi.getTipDoc('/' + this.IdAcomparar).subscribe((data: {}) => {


      this.MiTipDocE = data;
      
      //console.log(" 44" + this.MiTipDocE[0].color)

    }, error => { console.log(error) });
    

  }
}
  
  //--------------------------------------------------------------

  public ActualizarTipDoc({value}:{value:TipdocInterface}) {

    
    console.log("Actualiza tipdoc asdsadasdsa")
  //  var textIdTipDoc = this.ActualizarATipDoc.getRawValue()['ActualizarIdipDoc'];
    //console.log("  45 " + textIdTipDoc);
    //var nuevoTipDoc = this.ActualizarATipDoc.getRawValue()['nuevoTipDoc'];
    //console.log("   la 46 " + nuevoTipDoc);
    //var nuevoIniTipDoc = this.ActualizarATipDoc.getRawValue()['nuevoIniTipDoc'];
    //console.log("   la 47 " + nuevoIniTipDoc);
  
    

    //var cadena = { "id_tipo_documento": textIdTipDoc,"nombre_tipo_documento":nuevoTipDoc, "inicial_tipo_documento" : nuevoIniTipDoc};

    //console.log("tales 48  " + cadena.id_tip_doc + " - " + cadena.tipo_documento + " - " +  cadena.iniciales_tip_doc)
   //value.id_tipo_documento= this.IdAcomparar;
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


  ngOnInit(): void {
    /*this.formBuilder.group

    this.ActualizarATipDoc = this.formBuilder.group(
    {
      ActualizarIdipDoc: [], 
      nuevoTipDoc: [], 
      nuevoIniTipDoc: [], 
 
    });
    this.formBuilder.group*/
  
  }

}
