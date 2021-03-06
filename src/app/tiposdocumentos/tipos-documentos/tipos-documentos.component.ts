import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';



@Component({
  selector: 'app-tipos-documentos',
  templateUrl: './tipos-documentos.component.html',
  styleUrls: ['./tipos-documentos.component.css']
})

export class TiposDocumentosComponent implements OnInit {



 /// es la pagina actual del paginado  
  PageActual:number=1;

  TipDocs: any = [];
  


  

  constructor(
      private formBuilder: FormBuilder,
      private servi: ServicioService,
      Router: Router) { }

  

   consultaTipDocs() {

  
    
    
    this.servi.getTipDocs().subscribe((data: {tipdoc: []}) => {this.TipDocs = data;}, error => {console.error(error + " ")});
    
    
   
  }

 

 

  ngOnInit() {

   this.consultaTipDocs();


  }


}