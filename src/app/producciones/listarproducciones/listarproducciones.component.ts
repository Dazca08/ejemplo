import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listarproducciones',
  templateUrl: './listarproducciones.component.html',
  styleUrls: ['./listarproducciones.component.css']
})
export class ListarproduccionesComponent implements OnInit {


  Producciones: any = [];
  Fechatemp: any;
  PageActual:number=1;
  

  constructor(
    private formBuilder: FormBuilder,
      private servi: ServicioService,
      Router: Router
  ) { }


  consultaProducciones() {
    
    this.servi.getProducciones().subscribe((data: {produccion: []}) => {this.Producciones = data;}, error => {console.error(error + " ")});
    
    
   
  }

  ngOnInit(): void {
    this.consultaProducciones();
  }

}
