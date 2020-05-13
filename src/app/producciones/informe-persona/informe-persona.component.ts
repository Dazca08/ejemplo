import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informe-persona',
  templateUrl: './informe-persona.component.html',
  styleUrls: ['./informe-persona.component.css']
})
export class InformePersonaComponent implements OnInit {

  MiInformePersona: any = [];
  filtrarInformePersona: FormGroup;
  

  constructor(private formBuilder: FormBuilder,
              private servi: ServicioService,
              Router: Router) { }


  public buscarInformePersona() {

    var filtovalor = this.filtrarInformePersona.getRawValue()['textfiltro'];
    var filtrofecha1 = this.filtrarInformePersona.getRawValue()['textfecha1'];
    var filtrofecha2 = this.filtrarInformePersona.getRawValue()['textfecha2'];
            
      this.servi.getInformePersona('/' + filtovalor,'/' + filtrofecha1,'/' + filtrofecha2).subscribe((data: {}) => {this.MiInformePersona = data;}, error => {console.log(error)});
                
              }

  ngOnInit(): void {
    this.filtrarInformePersona = this.formBuilder.group(
      {
        textfiltro: [],
        textfecha1: [],
        textfecha2: []
      });
         
      this.formBuilder.group
  }
  }


