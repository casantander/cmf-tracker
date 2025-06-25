export type MainParamList = {
  Indicadores: undefined;
  Detalle: { indicator: IndicatorParam };
  ListaValores: { indicator: IndicatorParam };
};

export type IndicatorParam = {
  key: string;
  label: string;
};