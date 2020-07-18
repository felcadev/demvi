import { Component, OnInit } from '@angular/core';
import { IndicadorService } from "../../services/indicador.service";
import { Indicador } from "../../models";


@Component({
  selector: 'app-body-indicadores',
  templateUrl: './body-indicadores.component.html',
  styleUrls: ['./body-indicadores.component.css']
})
export class BodyIndicadoresComponent implements OnInit {

  // Indicadores
  bitcoin: Indicador = {nombre: "", unidad_medida: "", valor: 0 };
  dolar: Indicador = {nombre: "", unidad_medida: "", valor: 0 };
  utm: Indicador = {nombre: "", unidad_medida: "", valor: 0 };
  uf: Indicador = {nombre: "", unidad_medida: "", valor: 0 };
  euro: Indicador = {nombre: "", unidad_medida: "", valor: 0 };
  libraCobre: Indicador = {nombre: "", unidad_medida: "", valor: 0 };

  constructor( private _indicadorService: IndicadorService) { }

  ngOnInit(): void {
    this._indicadorService.cargarData().subscribe(
      data => {
        this.bitcoin = data['bitcoin'];
        this.dolar = data['dolar'];
        this.utm = data['utm'];
        this.uf = data['uf'];
        this.euro = data['euro'];
        this.libraCobre = data['libra_cobre'];
      }
    );
  }

}
