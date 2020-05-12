import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscarcargo',
  templateUrl: './buscarcargo.component.html',
  styleUrls: ['./buscarcargo.component.css']
})
export class BuscarcargoComponent implements OnInit {


  MiCargo: any = [];
  filtrarCargo: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router
  ) { }

  public buscarCargos() {

    var filtovalor = this.filtrarCargo.getRawValue()['textfiltro'];

    this.servi.getCargo('/' + filtovalor).subscribe((data: {}) => {this.MiCargo = data;}, error => {console.log(error)});
    
  }

  ngOnInit(): void {
    this.filtrarCargo = this.formBuilder.group(
      {
        textfiltro: []
      }); 
      this.formBuilder.group
  }

}
