import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarpersonas',
  templateUrl: './listarpersonas.component.html',
  styleUrls: ['./listarpersonas.component.css']
})
export class ListarpersonasComponent implements OnInit {

  Personas: any = [];

  constructor(
    private formBuilder: FormBuilder,
      private servi: ServicioService,
      Router: Router
  ) { }


  consultaPersonas() {
    
    this.servi.getPersonas().subscribe((data: {personas: []}) => {this.Personas = data;}, error => {console.error(error + " ")});

  }

  ngOnInit(): void {
    this.consultaPersonas();
  }

}
