import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscarpersona',
  templateUrl: './buscarpersona.component.html',
  styleUrls: ['./buscarpersona.component.css']
})
export class BuscarpersonaComponent implements OnInit {

  MiPersona: any = [];
  filtrarPersona: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router) { }

    public buscarPersona() {

      var filtovalor = this.filtrarPersona.getRawValue()['textfiltro'];
  
      this.servi.getPersona('/' + filtovalor).subscribe((data: {}) => {this.MiPersona = data;}, error => {console.log(error)});
      
    }

  ngOnInit(): void {
    this.filtrarPersona = this.formBuilder.group(
      {
        textfiltro: []
      }); 
      this.formBuilder.group
  }

}
