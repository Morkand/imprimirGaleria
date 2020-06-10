export interface Factura {

  'fecha'?: string;
  'razon_social'?: string;
  'direccion'?: string;
  'pedido_numero'?: number;
  'tipo_factura'?: boolean; // true para contado false para credito
  'ruc'?: string;
  'tel'?: string;
  'codigo'?: string[];
  'unidad'?: string[];
  'descripcion'?: string[];
  'precio_unitario'?: number[];
  'exentas'?: number[];
  'iva_5'?: number[];
  'iva_10'?: number[];
  'total_a_pagar'?: number;
  'liquidacion_10'?: number;
  'liquidacion_5'?: number;
  'total_liquidacion'?: number;
  'documento'?: string;
}
