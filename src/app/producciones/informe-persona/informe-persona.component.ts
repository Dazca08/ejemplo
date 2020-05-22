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
  i:number=0;
  Fechatemp:string="";
  Fechatemp2:string="";
  

  constructor(private formBuilder: FormBuilder,
              private servi: ServicioService,
              Router: Router) { }


  public buscarInformePersona() {

    var filtovalor = this.filtrarInformePersona.getRawValue()['textfiltro'];
    var filtrofecha1 = this.filtrarInformePersona.getRawValue()['textfecha1'];
    var filtrofecha2 = this.filtrarInformePersona.getRawValue()['textfecha2'];
            
      this.servi.getInformePersona('/' + filtovalor,'/' + filtrofecha1,'/' + filtrofecha2).subscribe((data: {}) => {
        
        this.MiInformePersona = data;

        for(this.i=0;this.i<this.MiInformePersona.length;this.i++){
          this.Fechatemp=this.MiInformePersona[this.i].fecha_inicio_produccion;
          this.Fechatemp2=this.MiInformePersona[this.i].fecha_fin_produccion;
          var splited= this.Fechatemp.split("T",2);
          var splited2= this.Fechatemp2.split("T",2);
          console.log(splited)
          this.Fechatemp=splited[0];
          this.Fechatemp2=splited2[0];
          this.MiInformePersona[this.i].fecha_inicio_produccion=this.Fechatemp;
          this.MiInformePersona[this.i].fecha_fin_produccion=this.Fechatemp2;
          
    
          
        }
      }, error => {console.log(error)});
                
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


