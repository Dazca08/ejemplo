import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscarmateriales',
  templateUrl: './buscarmateriales.component.html',
  styleUrls: ['./buscarmateriales.component.css']
})
export class BuscarmaterialesComponent implements OnInit {

  MiMaterial: any = [];
  filtrarMaterial: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router) { }

    public buscarMaterial() {

      var filtovalor = this.filtrarMaterial.getRawValue()['textfiltro'];
  
      this.servi.getMaterial('/' + filtovalor).subscribe((data: {}) => {this.MiMaterial = data;}, error => {console.log(error)});
      
    }
    
    


  ngOnInit(): void {

    this.filtrarMaterial = this.formBuilder.group(
      {
        textfiltro: []
      }); 
      this.formBuilder.group
  }
  }


