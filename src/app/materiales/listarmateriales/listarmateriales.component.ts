import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listarmateriales',
  templateUrl: './listarmateriales.component.html',
  styleUrls: ['./listarmateriales.component.css']
})
export class ListarmaterialesComponent implements OnInit {


  Materiales: any = [];
  PageActual:number=1;

  constructor(
    private formBuilder: FormBuilder,
      private servi: ServicioService,
      Router: Router
  ) { }


  consultaMateriales() {
    
    
    this.servi.getMateriales().subscribe((data: {tipdoc: []}) => {this.Materiales = data;}, error => {console.error(error + " ")});
    
    
   
  }

  ngOnInit(): void {
    this.consultaMateriales();
  }

}
