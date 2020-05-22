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
  i:number=0;
  Fechatemp:string="";
  Fechatemp2:string="";
  PageActual:number=1;
  

  constructor(
    private formBuilder: FormBuilder,
      private servi: ServicioService,
      Router: Router
  ) { }


  consultaProducciones() {
    
    this.servi.getProducciones().subscribe((data: {produccion: []}) => {
      
      this.Producciones = data;
      for(this.i=0;this.i<this.Producciones.length;this.i++){
        this.Fechatemp=this.Producciones[this.i].fecha_inicio_produccion;
        this.Fechatemp2=this.Producciones[this.i].fecha_fin_produccion;
        var splited= this.Fechatemp.split("T",2);
        var splited2= this.Fechatemp2.split("T",2);
        console.log(splited)
        this.Fechatemp=splited[0];
        this.Fechatemp2=splited2[0];
        this.Producciones[this.i].fecha_inicio_produccion=this.Fechatemp;
        this.Producciones[this.i].fecha_fin_produccion=this.Fechatemp2;
        
  
        
      }

    }, error => {console.error(error + " ")});
    
    
   
  }

  ngOnInit(): void {
    this.consultaProducciones();
  }

}
