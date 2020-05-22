import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscarpersona',
  templateUrl: './buscarpersona.component.html',
  styleUrls: ['./buscarpersona.component.css']
})
export class BuscarpersonaComponent implements OnInit {

  MiPersona: any = [];
  filtrarPersona: FormGroup;

  i:number=0;
  Fechatemp:string="";

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router) { }

    public buscarPersona() {

      var filtovalor = this.filtrarPersona.getRawValue()['textfiltro'];
  
      this.servi.getPersona('/' + filtovalor).subscribe((data: {}) => {
        
        this.MiPersona = data;
        for(this.i=0;this.i<this.MiPersona.length;this.i++){
          this.Fechatemp=this.MiPersona[this.i].fecha_nacimiento_persona;
          var splited= this.Fechatemp.split("T",2);
          console.log(splited)
          this.Fechatemp=splited[0];
          this.MiPersona[this.i].fecha_nacimiento_persona=this.Fechatemp;
    
          
        }
      }, error => {console.log(error)});
      
    }

  ngOnInit(): void {
    this.filtrarPersona = this.formBuilder.group(
      {
        textfiltro: []
      }); 
      this.formBuilder.group
  }

}
