import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
//import { Http } from '@angular/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregaruntipdoc',
  templateUrl: './agregaruntipdoc.component.html',
  styleUrls: ['./agregaruntipdoc.component.css']
})
export class AgregaruntipdocComponent implements OnInit {

  InsertarGTipDoc: FormGroup;


  constructor(private formBuilder: FormBuilder,
      private servi: ServicioService,
      Router: Router) { }

  
      public InsertarTipDoc() {
        //console.log("31  Inserta");
    
        var datosvalo2 = this.InsertarGTipDoc.getRawValue()['textTipDoc'];
        var datosvalo3 = this.InsertarGTipDoc.getRawValue()['textiniTipDoc'];
        //console.log("Td", datosvalo2,datosvalo3)
    
        var cadena = {"nombre_tipo_documento":datosvalo2,"inicial_tipo_documento":datosvalo3};
        
        //console.log(" 39 " + cadena);
     
       Swal.fire(
         'Tipo de documento agregado con exito!',
           ' Agregado!',
          'success'
                  )
        this.servi.insertTipDoc(cadena).then(res => {console.log(res)}).catch(err => 


          {console.log(err)});
      }
        

  ngOnInit(): void {
    this.InsertarGTipDoc = this.formBuilder.group(
      {
        textTipDoc: [],
        textiniTipDoc: []
      });
  }

}
