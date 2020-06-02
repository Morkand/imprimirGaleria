export interface Consignacion {
  'fecha'?: string;
  'razon_social'?: string;
  'direccion'?: string;
  'pedido_numero'?: number;
  'tipo_factura'?: number;// 1 contado o 2 credito
  'ruc'?: string;
  'tel'?: string;
  'codigo'?: string[];
  'unidad'?: string[];
  'descripcion'?: string[];
  'precio_unitario'?: number[];
  'exentas'?: number[];
  'iva_5'?: number[];
  'iva_10'?: number[];
  'total_a_pagar_letras'?: string;
  'total_a_pagar'?: number;
  'liquidacion_10'?: number;
  'liquidacion_5'?: number;
  'total_liquidacion'?: number;
}
