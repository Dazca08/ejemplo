import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informe-producto',
  templateUrl: './informe-producto.component.html',
  styleUrls: ['./informe-producto.component.css']
})
export class InformeProductoComponent implements OnInit {

  MiInformeProducto: any = [];
  filtrarInformeProducto: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
              private servi: ServicioService,
              Router: Router
  ) { }



  public buscarInformeProducto() {

    var filtovalor = this.filtrarInformeProducto.getRawValue()['textfiltro'];
    var filtrofecha1 = this.filtrarInformeProducto.getRawValue()['textfecha1'];
    var filtrofecha2 = this.filtrarInformeProducto.getRawValue()['textfecha2'];
            
      this.servi.getInformeProducto('/' + filtovalor,'/' + filtrofecha1,'/' + filtrofecha2).subscribe((data: {}) => {this.MiInformeProducto = data;}, error => {console.log(error)});
                
              }

  ngOnInit(): void {
    this.filtrarInformeProducto = this.formBuilder.group(
      {
        textfiltro: [],
        textfecha1: [],
        textfecha2: []
      });
         
      this.formBuilder.group
  }

}
