import { NumeroLetrasService } from './../../servicios/numero-letras.service';
import { Factura } from './../../interfaces/factura';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  @Input()
  facturacion: Factura = {};
  constructor(public letras: NumeroLetrasService) { }

  ngOnInit(): void {
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <body onload="window.print();window.close()">${printContents}</body>
        <style>
        .factura {
          position: relative;
          transform: rotate(180deg);
        }
        .xcontado1 {
          position: absolute;
          top: 36px;
          left: 546px;
        }
        .xcredito1 {
          position: absolute;
          top: 36px;
          left: 602px;
        }
        .fecha1 {
          position: absolute;
          top: 37.5px;
          left: 300px;
          font-size: 10px;
        }
        .razon1 {
          position: absolute;
          top: 53px;
          left: 320px;
          font-size: 10px;
        }
        .direccion1 {
          position: absolute;
          top: 73px;
          left: 307px;
          font-size: 9px;
        }
        .numero_pedido1 {
          position: absolute;
          top: 91px;
          left: 308px;
          font-size: 9px;
        }
        .razon1 {
          position: absolute;
          top: 56px;
          left: 320px;
          font-size: 9px;
        }
        .ruc1 {
          position: absolute;
          top: 71px;
          left: 529px;
          font-size: 9px;
        }
        .tel1 {
          position: absolute;
          top: 88px;
          left: 548px;
          font-size: 9px;
        }
        .codigo1 {
          position: absolute;
          top: 140px;
          left: 80px;
          font-size: 9px;
        }
        .unidad1 {
          position: absolute;
          top: 140px;
          left: 150px;
          font-size: 9px;
        }
        .descripcion1 {
          position: absolute;
          top: 140px;
          left: 260px;
          font-size: 9px;
        }
        .excentas1 {
          position: absolute;
          top: 140px;
          left: 572px;
          font-size: 9px;
        }
        .precio_unitario1 {
          position: absolute;
          top: 140px;
          left: 512px;
          font-size: 9px;
        }
        .iva_5 {
          position: absolute;
          top: 140px;
          left: 643px;
          font-size: 9px;
        }
        .iva_10 {
          position: absolute;
          top: 140px;
          left: 727px;
          font-size: 9px;
        }
        .total_a_pagar1 {
          position: absolute;
          top: 298px;
          left: 722px;
          font-size: 9px;
        }
        .total_a_pagar_letras1 {
          position: absolute;
          top: 298px;
          left: 230px;
          font-size: 9px;
        }
        .iva_5_total {
          position: absolute;
          top: 318px;
          left: 180px;
          font-size: 9px;
        }
        .iva_10_total {
          position: absolute;
          top: 318px;
          left: 329px;
          font-size: 9px;
        }
        .iva_total {
          position: absolute;
          top: 318px;
          left: 722px;
          font-size: 9px;
        }
        .documento {
          position: absolute;
          top: 355px;
          left: 700px;
          font-size: 14px;
        }

        .duplicado {
          position: absolute;
          width: 800px;
          top: 426px;
        }
        .triplicado {
          position: absolute;
          width: 800px;
          top: 858px;
        }
        body {
          width: 812.5984252px;
          height: 1247.2440945px;
        }


        </style>
      </html>`
    );
    popupWin.document.close();
  }


}
