//Librerias a importar
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


//para el manejo y estilo de los Json
const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable(
  {
    providedIn: 'root'
  })

//exporta el servicio 
export class ServicioService {

  //dirección del servicio en el Back-End BE
  private Url: string = 'http://localhost:3300';

  constructor(private http: HttpClient) { }


  //Método para extraer los datos del servicio BE
  private extractData(res: Response) {
    //console.log("12", res);

    let body = res;
    
    //console.log("13")
    return body || {};
    ;
  }


  //manejador de los errores
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log(`${operation} failed: ${error.message}`);
      return of(result as T)

    };
  }

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // TODOS LOS CRUL DE TODAS LAS CLASES DEL PROYECTO 
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  //=============================================================
  // SERVICIO CRUL DE TIPOS DE DOCUMENTOS
  //=============================================================

  // Método Listar de los Tipos de documentos
  //Mismos nombres de los metodos en la clase rutas del BE 
  getTipDocs(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/tipdoc", httpOptions).pipe(
      map(this.extractData)      
    );
  }

  //-------------------------------------------------------------
 // Método mostrar un solo Tipo de documento 

  getTipDoc(id): Observable<any> {
    
    return this.http.get(this.Url + "/tipdoc" + id, httpOptions).pipe(
      map(this.extractData));
  }

  //-------------------------------------------------------------
 // Método para insertar un nuevo Tipo de documento 

  /*async insertTipDoc(TipoDocumento): Promise<any> {

    //console.log(Color, this.Url+"/color")

    return new Promise((resolve, reject) => {
      this.http.post(this.Url + "/tipdoc", TipoDocumento, httpOptions).toPromise()});
   
  
             }*/
   async insertTipDoc(TipoDocumento){
          return this.http.post(this.Url + "/tipdoc", TipoDocumento, httpOptions).pipe(catchError(err => {
                    return of( err.error );
                }))
                .subscribe(res => {
                console.log(res.ok ,res.message);
                
                    console.log(res);
                },
                (err) => { console.log(err)
                
                       console.log(err);

  },

            );


  }
  //-------------------------------------------------------------
 // Método para modificar un  Tipo de documento

  
  async updateTipDoc(cadena): Promise<any> {

  
 
    return new Promise((resolve, reject) => {
      this.http.put(this.Url + "/tipdoc", cadena, httpOptions).toPromise()
    });
  }
 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// SE CONTINUA CON LOS CRUL DE OTRA CLASE 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

}