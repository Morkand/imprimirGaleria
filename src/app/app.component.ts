import { Consignacion } from './interfaces/consignacion';
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
    fecha: '11-06-2020',
    razon_social: 'Juan Perez',
    direccion: 'Direccion1',
    pedido_numero: 123,
    ruc: '123456-7',
    tel: '',
    codigo: ['121', '356', '521', '5521'],
    descripcion: ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'],
    precio_unitario: [1000000, 2000000, 3000000, 4000000],
    exentas: [34, 234, 234, 233],
    iva_5: [54, 212, 145, 454],
    iva_10: [101, 522, 145, 1100],
    total_a_pagar: 10000000,
    liquidacion_5: 0,
    liquidacion_10: 0,
    total_liquidacion: 0,
    documento: '3438738'
  };
  consignacion: Consignacion = {
    recibi: 'Me llego por que si',
    efectos: 'El efecto de tu corazon',
    codigo: ['1254', '255', '15', '421'],
    descripcion: ['descripcion 1', 'descripcion 2', 'descripcion 3', 'descripcion 4'],
    dimensiones: ['22x2', '3x3', '4x6', '6x44'],
    precio: [123254, 4552556, 565666, 565659],
    observaciones: ['asdasdas', 'asdasdasd', 'asdasdas', 'asdasdasd'],
    dia: 7,
    mes: 'diciembre',
    anho: 1991
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
