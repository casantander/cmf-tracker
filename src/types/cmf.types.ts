export interface IndicadorValue {
  Fecha: string;
  Valor: string;
}

export interface IndicadorResponse {
  [key: string]: {
    [key: string]: IndicadorValue[];
  };
}