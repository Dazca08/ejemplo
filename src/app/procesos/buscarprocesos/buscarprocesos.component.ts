import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscarprocesos',
  templateUrl: './buscarprocesos.component.html',
  styleUrls: ['./buscarprocesos.component.css']
})
export class BuscarprocesosComponent implements OnInit {

  MiProceso: any = [];
  filtrarProceso: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
      private servi: ServicioService,
      Router: Router
  ) { }

  
  public buscarProcesos() {

    var filtovalor = this.filtrarProceso.getRawValue()['textfiltro'];

    this.servi.getProceso('/' + filtovalor).subscribe((data: {}) => {this.MiProceso = data;}, error => {console.log(error)});
    
  }

  ngOnInit(): void {
    this.filtrarProceso = this.formBuilder.group(
      {
        textfiltro: []
      }); 
      this.formBuilder.group
  }

}