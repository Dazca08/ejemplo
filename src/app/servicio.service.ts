//Librerias a importar
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


//Manejo y estilo de los Json
const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable(
  {
    providedIn: 'root'
  })


export class ServicioService {

  //dirección del  Back-End 
  private Url: string = 'http://localhost:3300';

  constructor(private http: HttpClient) { }


  //Método para extraer los datos del servicio BE
  private extractData(res: Response) {
    

    let body = res;
    
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

  
  // Método Listar de los Tipos de documentos
   
  getTipDocs(): Observable<any> {

    

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
// Personas 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

getPersonas(): Observable<any> {

    

  return this.http.get(this.Url + "/personas", httpOptions).pipe(
    map(this.extractData)      
  );
}

//-------------------------------------------------------------
 // Método mostrar una sola persona 

 getPersona(id): Observable<any> {
    
  return this.http.get(this.Url + "/personas" + id, httpOptions).pipe(
    map(this.extractData));
}


 //-------------------------------------------------------------
 // Método para insertar una nueva persona 

  
 async insertPersona(maspersonas){
  return this.http.post(this.Url + "/personas", maspersonas, httpOptions).pipe(catchError(err => {
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
 // Método para modificar una persona

  
 async updatePersona(cadenaPersona): Promise<any> {

  
 
  return new Promise((resolve, reject) => {
    this.http.put(this.Url + "/personas", cadenaPersona, httpOptions).toPromise()
  });
}



// Método Listar los cargos
   
getCargos(): Observable<any> {

    

  return this.http.get(this.Url + "/cargos", httpOptions).pipe(
    map(this.extractData)      
  );
}


//-------------------------------------------------------------
 // Método mostrar un solo cargo 

 getCargo(id): Observable<any> {
    
  return this.http.get(this.Url + "/cargos" + id, httpOptions).pipe(
    map(this.extractData));
}


//-------------------------------------------------------------
 // Método para insertar un nuevo cargo 

  
 async insertCargo(mascargos){
  return this.http.post(this.Url + "/cargos", mascargos, httpOptions).pipe(catchError(err => {
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
 // Método para modificar una persona

  
 async updateCargo(cadenaCargo): Promise<any> {

  
 
  return new Promise((resolve, reject) => {
    this.http.put(this.Url + "/cargos", cadenaCargo, httpOptions).toPromise()
  });
}



}



