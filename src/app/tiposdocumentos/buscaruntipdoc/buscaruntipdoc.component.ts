import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-buscaruntipdoc',
  templateUrl: './buscaruntipdoc.component.html',
  styleUrls: ['./buscaruntipdoc.component.css']
})
export class BuscaruntipdocComponent implements OnInit {

  MiTipDoc: any = [];
  filtrarTipDoc: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
      private servi: ServicioService,
      Router: Router
  ) { }

  public buscarTipDocs() {

    var filtovalor = this.filtrarTipDoc.getRawValue()['textfiltro'];

    this.servi.getTipDoc('/' + filtovalor).subscribe((data: {}) => {this.MiTipDoc = data;}, error => {console.log(error)});
    
  }

  ngOnInit(): void {
    this.filtrarTipDoc = this.formBuilder.group(
      {
        textfiltro: []
      }); 
      this.formBuilder.group
  }

}
