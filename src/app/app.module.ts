import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfomacionComponent } from './infomacion/infomacion.component';
import { MenuComponent } from './menu/menu.component';
import { FormularioComponent } from './formulario/formulario.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RepoteService } from './repote.service';
import { ReporteComponent } from './reporte/reporte.component';
import { RouterModule, Route } from '@angular/router';
import { GastosComponent } from './gastos/gastos.component';

const rutas:Route[]=[
  {path: 'infomacion', component:InfomacionComponent},
  {path: 'registro', component:FormularioComponent},
  {path: 'resporte', component:ReporteComponent},
  {path: 'gastos', component:GastosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InfomacionComponent,
    FormularioComponent,
    ReporteComponent,
    GastosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [RepoteService],
  bootstrap: [AppComponent]
})


export class AppModule { }
