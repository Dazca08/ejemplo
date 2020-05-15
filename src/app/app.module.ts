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
//libreria para paginacion
import { NgxPaginationModule } from 'ngx-pagination';


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
import { ListarTipproductosComponent } from './tipproductos/listar-tipproducto/listar-tipproductos.component';
import { BuscarTipproductoComponent } from './tipproductos/buscar-tipproducto/buscar-tipproducto.component';
import { InsertarTipproductoComponent } from './tipproductos/insertar-tipproducto/insertar-tipproducto.component';
import { ActuTipproductoComponent } from './tipproductos/actu-tipproducto/actu-tipproducto.component';
import { ListarproductoComponent } from './producto/listarproducto/listarproducto.component';
import { BuscarproductoComponent } from './producto/buscarproducto/buscarproducto.component';
import { InsertarproductoComponent } from './producto/insertarproducto/insertarproducto.component';
import { ActuproductoComponent } from './producto/actuproducto/actuproducto.component';
import { ListarmaterialesComponent } from './materiales/listarmateriales/listarmateriales.component';
import { BuscarmaterialesComponent } from './materiales/buscarmateriales/buscarmateriales.component';
import { InsertarmaterialesComponent } from './materiales/insertarmateriales/insertarmateriales.component';
import { ActumaterialesComponent } from './materiales/actumateriales/actumateriales.component';
import { ListarprocesosComponent } from './procesos/listarprocesos/listarprocesos.component';
import { BuscarprocesosComponent } from './procesos/buscarprocesos/buscarprocesos.component';
import { InsertarprocesosComponent } from './procesos/insertarprocesos/insertarprocesos.component';
import { ActuprocesosComponent } from './procesos/actuprocesos/actuprocesos.component';
import { ListarproduccionesComponent } from './producciones/listarproducciones/listarproducciones.component';
import { BuscarproduccionesComponent } from './producciones/buscarproducciones/buscarproducciones.component';
import { InsertarproduccionesComponent } from './producciones/insertarproducciones/insertarproducciones.component';
import { ActuproduccionesComponent } from './producciones/actuproducciones/actuproducciones.component';
import { InformePersonaComponent } from './producciones/informe-persona/informe-persona.component';
import { InformeProductoComponent } from './producciones/informe-producto/informe-producto.component';



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

    {
      path: 'ListarCargo',
      component: ListarcargosComponent,
    },

    {
      path: 'BuscarCargo',
      component: BuscarcargoComponent,
    },


    {
      path: 'AgregarCargo',
      component: InsertarcargosComponent,
    },

    {
      path: 'EditarCargo',
      component: ActucargosComponent,
    },


    {
      path: 'ListarTipProducto',
      component: ListarTipproductosComponent,
    },


    {
      path: 'BuscarTipProducto',
      component: BuscarTipproductoComponent,
    },


    {
      path: 'AgregarTipProducto',
      component: InsertarTipproductoComponent,
    },


    {
      path: 'EditarTipProducto',
      component: ActuTipproductoComponent,
    },


    {
      path: 'ListarProducto',
      component: ListarproductoComponent,
    },



    {
      path: 'BuscarProducto',
      component: BuscarproductoComponent,
    },


    {
      path: 'AgregarProducto',
      component: InsertarproductoComponent,
    },


    
    {
      path: 'EditarProducto',
      component: ActuproductoComponent,
    },


    {
      path: 'ListarMaterial',
      component: ListarmaterialesComponent,
    },


    {
      path: 'BuscarMaterial',
      component: BuscarmaterialesComponent,
    },

    {
      path: 'AgregarMaterial',
      component: InsertarmaterialesComponent,
    },


    {
      path: 'EditarMaterial',
      component: ActumaterialesComponent,
    },


    {
      path: 'ListarProceso',
      component: ListarprocesosComponent,
    },


    {
      path: 'BuscarProceso',
      component: BuscarprocesosComponent,
    },


    {
      path: 'AgregarProceso',
      component: InsertarprocesosComponent,
    },


    {
      path: 'EditarProceso',
      component: ActuprocesosComponent,
    },


    {
      path: 'ListarProduccion',
      component: ListarproduccionesComponent,
    },


    {
      path: 'BuscarProduccion',
      component: BuscarproduccionesComponent,
    },


    {
      path: 'AgregarProduccion',
      component: InsertarproduccionesComponent,
    },

    {
      path: 'EditarProduccion',
      component: ActuproduccionesComponent,
    },


    {
      path: 'Informeporpersona',
      component: InformePersonaComponent,
    },


    {
      path: 'Informeporproducto',
      component: InformeProductoComponent,
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
    ActucargosComponent,
    ListarTipproductosComponent,
    BuscarTipproductoComponent,
    InsertarTipproductoComponent,
    ActuTipproductoComponent,
    ListarproductoComponent,
    BuscarproductoComponent,
    InsertarproductoComponent,
    ActuproductoComponent,
    ListarmaterialesComponent,
    BuscarmaterialesComponent,
    InsertarmaterialesComponent,
    ActumaterialesComponent,
    ListarprocesosComponent,
    BuscarprocesosComponent,
    InsertarprocesosComponent,
    ActuprocesosComponent,
    ListarproduccionesComponent,
    BuscarproduccionesComponent,
    InsertarproduccionesComponent,
    ActuproduccionesComponent,
    InformePersonaComponent,
    InformeProductoComponent,  //<- Adicionar los componentes
  ],

  imports: 
  [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
   // HttpModule,
    RouterModule.forRoot(appRoutes), // se agregan estos 
    BrowserModule,
    HttpClientModule  // <- Agregar la clase
  ],

  providers: [ServicioService],
  bootstrap: [AppComponent] 
})

export class AppModule { }
