import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturaComponent } from './imprimir/factura/factura.component';
import { ConsignacionComponent } from './imprimir/consignacion/consignacion.component';

@NgModule({
  declarations: [
    AppComponent,
    FacturaComponent,
    ConsignacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
