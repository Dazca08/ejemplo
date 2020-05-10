import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElservicioService {

  constructor(private http:HttpClient) { }
  
  ruta:string="http/localhost:3300/"
  obtenerjson():Observable<any>{
    return this.http.get(this.ruta + 'tipdoc')

  }
}
