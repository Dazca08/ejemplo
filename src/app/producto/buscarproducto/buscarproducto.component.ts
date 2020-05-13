import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscarproducto',
  templateUrl: './buscarproducto.component.html',
  styleUrls: ['./buscarproducto.component.css']
})
export class BuscarproductoComponent implements OnInit {

  MiProducto: any = [];
  filtrarProducto: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
      private servi: ServicioService,
      Router: Router
  ) { }



  public buscarProducto() {

    var filtovalor = this.filtrarProducto.getRawValue()['textfiltro'];

    this.servi.getProducto('/' + filtovalor).subscribe((data: {}) => {this.MiProducto = data;}, error => {console.log(error)});
    
  }

  ngOnInit(): void {
    this.filtrarProducto = this.formBuilder.group(
      {
        textfiltro: []
      }); 
      this.formBuilder.group
  }
  }



