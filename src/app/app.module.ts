import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { BodyIndicadoresComponent } from './components/body-indicadores/body-indicadores.component';
import { BodyConversorComponent } from './components/body-conversor/body-conversor.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyIndicadoresComponent,
    BodyConversorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
