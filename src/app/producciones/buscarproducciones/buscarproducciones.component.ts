import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscarproducciones',
  templateUrl: './buscarproducciones.component.html',
  styleUrls: ['./buscarproducciones.component.css']
})
export class BuscarproduccionesComponent implements OnInit {

  MiProduccion: any = [];
  filtrarProduccion: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
      private servi: ServicioService,
      Router: Router
  ) { }


  public buscarTipDocs() {

    var filtovalor = this.filtrarProduccion.getRawValue()['textfiltro'];

    this.servi.getProduccion('/' + filtovalor).subscribe((data: {}) => {this.MiProduccion = data;}, error => {console.log(error)});
    
  }

  ngOnInit(): void {
    this.filtrarProduccion = this.formBuilder.group(
      {
        textfiltro: []
      }); 
      this.formBuilder.group
  }

}
