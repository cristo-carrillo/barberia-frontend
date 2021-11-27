import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasComponent } from './components/citas/citas.component';
import { CortesComponent } from './components/cortes/cortes.component';
import { ErrorComponent } from './components/error/error.component';
import { FormularioCorteComponent } from './components/formulario-corte/formulario-corte.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TablaCortesComponent } from './components/tabla-cortes/tabla-cortes.component';

const routes: Routes = [
  {path: 'cortes',component:CortesComponent},
  {path: 'citas',component:CitasComponent},
  {path: 'error',component:ErrorComponent},
  {path: 'formulario-corte',component:FormularioCorteComponent},
  {path: '',component:InicioComponent},
  {path: '**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
