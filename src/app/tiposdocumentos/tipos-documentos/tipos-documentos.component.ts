import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';


@Component({
  selector: 'app-tipos-documentos',
  templateUrl: './tipos-documentos.component.html',
  styleUrls: ['./tipos-documentos.component.css']
})

export class TiposDocumentosComponent implements OnInit {



  

  TipDocs: any = [];
  


  ;

  constructor(
      private formBuilder: FormBuilder,
      private servi: ServicioService,
      Router: Router) { }

  //=============================================================
  //LOS CRUL
  //=============================================================

   consultaTipDocs() {
    
    
    this.servi.getTipDocs().subscribe((data: {tipdoc: []}) => {this.TipDocs = data;}, error => {console.error(error + " ")});
    
    
   
  }

 

 
  //=============================================================
  //LAS FUNCIONES PARA LLAMARLAS DESDE EL HTML
  //=============================================================  
  ngOnInit() {

   this.consultaTipDocs();


  }


}