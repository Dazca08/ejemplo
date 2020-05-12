import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarcargos',
  templateUrl: './listarcargos.component.html',
  styleUrls: ['./listarcargos.component.css']
})
export class ListarcargosComponent implements OnInit {


  Cargos: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router
  ) { }



  consultaCargos() {
    
    
    this.servi.getCargos().subscribe((data: {tipdoc: []}) => {this.Cargos = data;}, error => {console.error(error + " ")});
    
    
   
  }

  ngOnInit(): void {

    this.consultaCargos();
  }

}
