import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TablaCortesComponent } from './components/tabla-cortes/tabla-cortes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CitasComponent } from './components/citas/citas.component';
import { CortesComponent } from './components/cortes/cortes.component';
import { HttpClientModule } from '@angular/common/http';
import { CortesService } from './services/cortes/cortes.service';
import { ErrorComponent } from './components/error/error.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormularioCorteComponent } from './components/formulario-corte/formulario-corte.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TablaCortesComponent,
    NotFoundComponent,
    CitasComponent,
    CortesComponent,
    ErrorComponent,
    InicioComponent,
    FormularioCorteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CortesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
