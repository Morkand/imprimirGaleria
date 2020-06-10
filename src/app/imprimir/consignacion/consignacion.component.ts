import { NumeroLetrasService } from './../../servicios/numero-letras.service';
import { Consignacion } from './../../interfaces/consignacion';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consignacion',
  templateUrl: './consignacion.component.html',
  styleUrls: ['./consignacion.component.css']
})
export class ConsignacionComponent implements OnInit {

  @Input()
  consignacion: Consignacion = {};

  constructor(public letras: NumeroLetrasService) { }

  ngOnInit(): void {
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section-MUI').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <body onload="window.print();window.close()">${printContents}</body>
        <style>
        .recibi1 {
          position: absolute;
          top: 93px;
          left: 205px;
          font-size: 10px;
        }
        .efectos1 {
          position: absolute;
          top: 93px;
          left: 550px;
          font-size: 10px;
        }
        .codigo1 {
          position: absolute;
          top: 141px;
          left: 77px;
          font-size: 9px;
        }
        .dimensiones1 {
          position: absolute;
          top: 141px;
          left: 515px;
          font-size: 9px;
        }
        .precio1 {
          position: absolute;
          top: 141px;
          left: 600px;
          font-size: 9px;
        }
        .descripcion1 {
          position: absolute;
          top: 141px;
          left: 200px;
          font-size: 9px;
        }
        .excentas1 {
          position: absolute;
          top: 141px;
          left: 572px;
          font-size: 9px;
        }
        .observaciones1 {
          position: absolute;
          top: 141px;
          left: 705px;
          font-size: 9px;
        }
        .dia {
          position: absolute;
          top: 373px;
          left: 626px;
          font-size: 9px;
        }
        .mes {
          position: absolute;
          top: 373px;
          left: 669px;
          font-size: 9px;
        }
        .anho {
          position: absolute;
          top: 373px;
          left: 765px;
          font-size: 9px;
        }
        .duplicado {
          position: absolute;
          top: 427px;
          width: 800px;
        }
        .triplicado {
          position: absolute;
          top: 856px;
          width: 800px;
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
