import { Factura } from './interfaces/factura';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Galeria';
  factura: Factura = {
    tipo_factura: true, // true para contado false para credito
    fecha: '07-12-1991',
    razon_social: 'La razon social mas true',
    direccion: 'Donde el demoño perdio el poncho',
    pedido_numero: 666,
    ruc: '6666666-6',
    tel: '666-666',
    codigo: ['121', '666', '521', '5521'],
    descripcion: ['esto es algo', 'metal /m/', 'esto es algo', 'esto es algo'],
    precio_unitario: [5215, 666666, 55221, 52122],
    exentas: [34, 234, 234, 233],
    iva_5: [54, 212, 145, 454],
    iva_10: [101, 522, 145, 1100],
    total_a_pagar: 0,
    liquidacion_5: 0,
    liquidacion_10: 0,
    total_liquidacion: 0,
    documento: '3438738'
  };
  ngOnInit(): void {
    this.factura.total_a_pagar = this.factura.total_a_pagar + this.suma(this.factura.precio_unitario);
    this.factura.liquidacion_5 = this.factura.liquidacion_5 + this.suma(this.factura.iva_5);
    this.factura.liquidacion_10 = this.factura.liquidacion_10 + this.suma(this.factura.iva_10);
    this.factura.total_liquidacion = this.factura.total_liquidacion + (this.factura.liquidacion_10 + this.factura.liquidacion_5);

  }

  suma(sum: number[]): number {
    let total: number = 0;
    for (const s of sum) {
      total = total + s;
    }
    return total;
  }
}
