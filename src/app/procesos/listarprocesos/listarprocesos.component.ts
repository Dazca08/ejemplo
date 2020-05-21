import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarprocesos',
  templateUrl: './listarprocesos.component.html',
  styleUrls: ['./listarprocesos.component.css']
})
export class ListarprocesosComponent implements OnInit {


  Procesos: any = [];
  PageActual:number=1;

  constructor(
    private formBuilder: FormBuilder,
      private servi: ServicioService,
      Router: Router
  ) { }



  consultaProcesos() {
    
    
    this.servi.getProcesos().subscribe((data: {proceso: []}) => {this.Procesos = data;}, error => {console.error(error + " ")});
    
    
   
  }

  ngOnInit(): void {
    this.consultaProcesos();
  }

}
