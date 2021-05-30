import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import {FormsModule} from "@angular/forms";
import { ListaHistorialComponent } from './lista-historial/lista-historial.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ListaHistorialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
