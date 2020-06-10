export interface Consignacion {
  'recibi'?: string;
  'efectos'?: string;
  'codigo'?: string[];
  'unidad'?: string[];
  'descripcion'?: string[];
  'precio_unitario'?: string[];
  'exentas'?: number[];
  'iva_5'?: number[];
  'iva_10'?: number[];
  'total_a_pagar_letras'?: string;
  'total_a_pagar'?: number;
  'liquidacion_10'?: number;
  'liquidacion_5'?: number;
  'total_liquidacion'?: number;
}
