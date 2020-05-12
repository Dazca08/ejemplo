import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-tipproducto',
  templateUrl: './buscar-tipproducto.component.html',
  styleUrls: ['./buscar-tipproducto.component.css']
})
export class BuscarTipproductoComponent implements OnInit {

  MiTipProducto: any = [];
  filtrarTipProducto: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
      private servi: ServicioService,
      Router: Router
  ) { }


  public buscarTipProducto() {

    var filtovalor = this.filtrarTipProducto.getRawValue()['textfiltro'];

    this.servi.getTipProducto('/' + filtovalor).subscribe((data: {}) => {this.MiTipProducto = data;}, error => {console.log(error)});
    
  }

  ngOnInit(): void {
    this.filtrarTipProducto = this.formBuilder.group(
      {
        textfiltro: []
      }); 
      this.formBuilder.group
  }

}
