import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ElservicioService } from 'src/app/servicios/elservicio.service';
import { HttpClientModule, } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

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
    ElservicioService,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
