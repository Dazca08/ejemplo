import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ElservicioService } from 'src/app/servicios/elservicio.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuinicioComponent } from './tipdoc/menuinicio/menuinicio.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuinicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElservicioService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
