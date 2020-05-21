import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarpersonas',
  templateUrl: './listarpersonas.component.html',
  styleUrls: ['./listarpersonas.component.css']
})
export class ListarpersonasComponent implements OnInit {

  PageActual:number=1;
  Personas: any = [];
  i: any;
  Fechatemp: any;

  constructor(
    private formBuilder: FormBuilder,
      private servi: ServicioService,
      Router: Router
  ) { }


  consultaPersonas() {
    
    

    for(this.i=0;this.i<this.Personas.lenght;this.i++){
      this.Fechatemp=this.Personas[this.i].fecha_nacimiento_persona;
      var splited= this.Fechatemp.split("T",2);
      console.log(splited)
      this.Fechatemp=splited[0];
      this.Personas[this.i].fecha_nacimiento_persona=this.Fechatemp;

      
    }
    this.servi.getPersonas().subscribe((data: {personas: []}) => {this.Personas = data;}, error => {console.error(error + " ")});
  }

  ngOnInit(): void {
    this.consultaPersonas();
  }

}
