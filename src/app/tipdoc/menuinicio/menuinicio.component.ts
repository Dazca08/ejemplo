import { Component, OnInit } from '@angular/core';
import { ElservicioService } from 'src/app/servicios/elservicio.service'; 

@Component({
  selector: 'app-menuinicio',
  templateUrl: './menuinicio.component.html',
  styleUrls: ['./menuinicio.component.css']
})
export class MenuinicioComponent implements OnInit {

  constructor(private servicio:ElservicioService) { }

  obtenertipdocs(){
    this.servicio.obtenerjson().subscribe(resultado=>{
      this.datostipdocs=resultado;
      console.log(this.datostipdocs);
    });
  }

  datostipdocs:any;
  
  ngOnInit(): void {
  }


}
