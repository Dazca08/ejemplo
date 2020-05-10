import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

//para el manejo y estilo de los Json
const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ElservicioService {

  constructor(private http:HttpClient) { }
  
  ruta:string="http://localhost:3300"
  obtenerjson():Observable<any>{
    return this.http.get(this.ruta + '/tipdoc',httpOptions)

  }
}
