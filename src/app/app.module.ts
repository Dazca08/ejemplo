// *********************************************************** 
//En esta clase se organiza lo que se va a mostrar en el sitio 
// *********************************************************** 

// Librería para poder consumir el servicio
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//import { HttpModule, } from '@angular/http';
import { HttpClientModule, } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

//.................................................................................
//se incluyen los componentes que tenemos y el servicio
import { AppComponent } from './appComponent/app.component';


import { InicioComponent } from './inicio/inicio.component';
import { TiposDocumentosComponent }  from './tiposdocumentos/tipos-documentos/tipos-documentos.component';

import { ServicioService } from './servicio.service';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { BuscaruntipdocComponent } from './tiposdocumentos/buscaruntipdoc/buscaruntipdoc.component';
import { AgregaruntipdocComponent } from './tiposdocumentos/agregaruntipdoc/agregaruntipdoc.component';
import { ActuntipdocComponent } from './tiposdocumentos/actuntipdoc/actuntipdoc.component';
import { ListarpersonasComponent } from './personas/listarpersonas/listarpersonas.component';
import { BuscarpersonaComponent } from './personas/buscarpersona/buscarpersona.component';
import { InsertarpersonaComponent } from './personas/insertarpersona/insertarpersona.component';
import { ActupersonaComponent } from './personas/actupersona/actupersona.component';
import { ListarcargosComponent } from './cargos/listarcargos/listarcargos.component';
import { BuscarcargoComponent } from './cargos/buscarcargo/buscarcargo.component';
import { InsertarcargosComponent } from './cargos/insertarcargos/insertarcargos.component';
import { ActucargosComponent } from './cargos/actucargos/actucargos.component';



//..................................................................................
//se establecen las rutas a los componentes
const appRoutes: Routes = 
[
    {
      path: '',
      pathMatch: 'prefix',
      redirectTo: 'Inicio',
    },

    {
      path: 'Inicio',
      component: InicioComponent,
    },

    {
      path: 'TipDoc',
      component: TiposDocumentosComponent,
    },

    {
      path: 'BuscarTipDoc',
      component: BuscaruntipdocComponent,
    },

    {
      path: 'AgregarTipDoc',
      component: AgregaruntipdocComponent,
    },

    {
      path: 'EditarTipDoc',
      component: ActuntipdocComponent,
    },

    {
      path: 'ListarPersona',
      component:ListarpersonasComponent,
    },

    {
      path: 'BuscarPersona',
      component: BuscarpersonaComponent,
    },

    {
      path: 'AgregarPersona',
      component: InsertarpersonaComponent,
    },

    {
      path: 'EditarPersona',
      component: ActupersonaComponent,
    },


    

  ];

//.........................................................................
//declaracion de los componentes y módulos 
//y se importan los elementos a utilizar

@NgModule({
  declarations: 
  [
    AppComponent,
    TiposDocumentosComponent,
    InicioComponent,
    EncabezadoComponent,
    BuscaruntipdocComponent,
    AgregaruntipdocComponent,
    ActuntipdocComponent,
    ListarpersonasComponent,
    BuscarpersonaComponent,
    InsertarpersonaComponent,
    ActupersonaComponent,
    ListarcargosComponent,
    BuscarcargoComponent,
    InsertarcargosComponent,
    ActucargosComponent,  //<- Adicionar los componentes
  ],

  imports: 
  [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
   // HttpModule,
    RouterModule.forRoot(appRoutes), // se agregan estos 
    BrowserModule,
    HttpClientModule  // <- Agregar la clase
  ],

  providers: [ServicioService],
  bootstrap: [AppComponent] 
})

export class AppModule { }
