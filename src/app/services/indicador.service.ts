import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IndicadorService {

  constructor( private http: HttpClient ) { }

  cargarData(){
    const url = "https://mindicador.cl/api";

    return this.http.get(url);
  }

}
