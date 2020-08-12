import { Component, OnInit } from '@angular/core';
import { Indicador } from 'src/app/models';
import { IndicadorService } from 'src/app/services/indicador.service';

@Component({
  selector: 'app-body-conversor',
  templateUrl: './body-conversor.component.html',
  styleUrls: ['./body-conversor.component.css']
})
export class BodyConversorComponent implements OnInit {

  // Indicadores Data
  dolar: Indicador = { nombre: "", unidad_medida: "", valor: 0 };
  utm: Indicador = { nombre: "", unidad_medida: "", valor: 0 };
  uf: Indicador = { nombre: "", unidad_medida: "", valor: 0 };
  euro: Indicador = { nombre: "", unidad_medida: "", valor: 0 };
  pesos: Indicador = { nombre: "", unidad_medida: "", valor: 0 };


  //Variables auxiliares para el intercambio de informacion
  dolarAux: number = 0;
  utmAux: number = 0;
  ufAux: number = 0;
  euroAux: number = 0;
  pesosAux: number = 0;


  constructor(private _indicadorService: IndicadorService) { }

  ngOnInit(): void {

    this._indicadorService.cargarData().subscribe(
      data => {
        //cargamos data
        this.dolar = data['dolar'];
        this.utm = data['utm'];
        this.uf = data['uf'];
        this.euro = data['euro'];

        //Inicializamos los valores auxiliares 
        this.pesosAux = 10000;
        this.pesosChanged();

      }
    );

  }

  pesosChanged() {
    if (!this.pesosAux) this.pesosAux = 0;

    //Se realiza el calculo correspondiente
    this.dolarAux = this.pesosAux / this.dolar.valor;
    this.utmAux = this.pesosAux / this.utm.valor;
    this.ufAux = this.pesosAux / this.uf.valor;
    this.euroAux = this.pesosAux / this.euro.valor;

  }

  dolarChanged(){

    if( !this.dolarAux ) this.dolarAux = 0;

    //Se realiza el calculo correspondiente
    this.pesosAux = this.calcularConversion( this.dolarAux, this.dolar.valor, 1 );
    this.utmAux = this.calcularConversion( this.dolarAux, this.dolar.valor, this.utm.valor );
    this.ufAux =this.calcularConversion( this.dolarAux, this.dolar.valor, this.uf.valor );
    this.euroAux = this.calcularConversion( this.dolarAux, this.dolar.valor, this.euro.valor );


  }

  ufChanged(){

    if( !this.ufAux ) this.ufAux = 0;

    //Se realiza el calculo correspondiente
    this.pesosAux = this.calcularConversion( this.ufAux, this.uf.valor, 1 );
    this.utmAux = this.calcularConversion( this.ufAux, this.uf.valor, this.utm.valor );
    this.dolarAux =this.calcularConversion( this.ufAux, this.uf.valor, this.dolar.valor );
    this.euroAux = this.calcularConversion( this.ufAux, this.uf.valor, this.euro.valor );

  }

  utmChanged(){

    if( !this.utmAux ) this.utmAux = 0;

    //Se realiza el calculo correspondiente
    this.pesosAux = this.calcularConversion( this.utmAux, this.utm.valor, 1 );
    this.ufAux = this.calcularConversion( this.utmAux, this.utm.valor, this.uf.valor );
    this.dolarAux =this.calcularConversion( this.utmAux, this.utm.valor, this.dolar.valor );
    this.euroAux = this.calcularConversion( this.utmAux, this.utm.valor, this.euro.valor );
  
  }

  euroChanged(){

    if( !this.euroAux ) this.euroAux = 0;

    //Se realiza el calculo correspondiente
    this.pesosAux = this.calcularConversion( this.euroAux, this.euro.valor, 1 );
    this.ufAux = this.calcularConversion( this.euroAux, this.euro.valor, this.uf.valor );
    this.dolarAux =this.calcularConversion( this.euroAux, this.euro.valor, this.dolar.valor );
    this.utmAux = this.calcularConversion( this.euroAux, this.euro.valor, this.utm.valor );

  }

  calcularConversion( cantidad: number, montoEnCLP: number, montoEnCLPaConvertir: number): number {
    return  ( cantidad * montoEnCLP ) / montoEnCLPaConvertir;
  }


}
