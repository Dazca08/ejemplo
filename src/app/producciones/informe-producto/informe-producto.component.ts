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
  i:number=0;
  Fechatemp:string="";
  Fechatemp2:string="";

  constructor(
    private formBuilder: FormBuilder,
              private servi: ServicioService,
              Router: Router
  ) { }



  public buscarInformeProducto() {

    var filtovalor = this.filtrarInformeProducto.getRawValue()['textfiltro'];
    var filtrofecha1 = this.filtrarInformeProducto.getRawValue()['textfecha1'];
    var filtrofecha2 = this.filtrarInformeProducto.getRawValue()['textfecha2'];
            
      this.servi.getInformeProducto('/' + filtovalor,'/' + filtrofecha1,'/' + filtrofecha2).subscribe((data: {}) => {
        
        this.MiInformeProducto = data;

        for(this.i=0;this.i<this.MiInformeProducto.length;this.i++){
          this.Fechatemp=this.MiInformeProducto[this.i].fecha_inicio_produccion;
          this.Fechatemp2=this.MiInformeProducto[this.i].fecha_fin_produccion;
          var splited= this.Fechatemp.split("T",2);
          var splited2= this.Fechatemp2.split("T",2);
          console.log(splited)
          this.Fechatemp=splited[0];
          this.Fechatemp2=splited2[0];
          this.MiInformeProducto[this.i].fecha_inicio_produccion=this.Fechatemp;
          this.MiInformeProducto[this.i].fecha_fin_produccion=this.Fechatemp2;
          
    
          
        }
      }, error => {console.log(error)});
                
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
