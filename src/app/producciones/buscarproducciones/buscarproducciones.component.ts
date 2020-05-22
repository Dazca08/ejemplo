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
  i:number=0;
  Fechatemp:string="";
  Fechatemp2:string="";
  PageActual:number=1;

  constructor(
    private formBuilder: FormBuilder,
      private servi: ServicioService,
      Router: Router
  ) { }


  public buscarTipDocs() {

    var filtovalor = this.filtrarProduccion.getRawValue()['textfiltro'];

    this.servi.getProduccion('/' + filtovalor).subscribe((data: {}) => {
      
      this.MiProduccion = data;
      for(this.i=0;this.i<this.MiProduccion.length;this.i++){
        this.Fechatemp=this.MiProduccion[this.i].fecha_inicio_produccion;
        this.Fechatemp2=this.MiProduccion[this.i].fecha_fin_produccion;
        var splited= this.Fechatemp.split("T",2);
        var splited2= this.Fechatemp2.split("T",2);
        console.log(splited)
        this.Fechatemp=splited[0];
        this.Fechatemp2=splited2[0];
        this.MiProduccion[this.i].fecha_inicio_produccion=this.Fechatemp;
        this.MiProduccion[this.i].fecha_fin_produccion=this.Fechatemp2;
        
  
        
      }
    }, error => {console.log(error)});
    
  }

  ngOnInit(): void {
    this.filtrarProduccion = this.formBuilder.group(
      {
        textfiltro: []
      }); 
      this.formBuilder.group
  }

}
