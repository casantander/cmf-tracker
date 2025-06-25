import axios from 'axios';
import { IndicadorValue, IndicadorResponse } from '../types/cmf.types';
import { API_KEY, BASE_URL } from '../constants/cmfApiConstants';

/**
 * Devuelve una lista de valores del indicador recibido, considerando los últimos 30 días desde la API de CMF Chile.
 */
export const getLast30DaysIndicator = async (indicator: string): Promise<IndicadorValue[]> => {
  const today = new Date();
  const pastDate = new Date();
  pastDate.setDate(today.getDate() - 30);

  const añoInicio = pastDate.getFullYear();
  const mesInicio = String(pastDate.getMonth() + 1).padStart(2, '0');
  const añoFin = today.getFullYear();
  const mesFin = String(today.getMonth() + 1).padStart(2, '0');

  const url = `${BASE_URL}/${indicator}/periodo/${añoInicio}/${mesInicio}/${añoFin}/${mesFin}`;

  try {
    const res = await axios.get<IndicadorResponse>(url, {
      params: {
        apikey: API_KEY,
        formato: 'json',
      },
    });

    const maybeValores = Object.values(res.data)[0];
    if (!Array.isArray(maybeValores)) {
        throw new Error('La respuesta no contiene un arreglo válido');
    }

    const valores = maybeValores as IndicadorValue[];
    return valores;
  } catch (error) {
    console.error('Error al obtener datos del dólar:', error);
    throw error;
  }
};

export const getCurrentYearIndicator = async (indicator: string): Promise<IndicadorValue[]> => {
  const year = new Date().getFullYear();
  const url = `${BASE_URL}/${indicator}/periodo/${year}/01/${year}/12`;

  try {
    const res = await axios.get(url, {
      params: {
        apikey: API_KEY,
        formato: 'json',
      },
    });

    const key = Object.keys(res.data)[0];
    const valores = res.data[key] as IndicadorValue[];
    return valores;
  } catch (error) {
    console.error(`Error al obtener datos del indicador ${indicator.toUpperCase()}:`, error);
    throw error;
  }
};

export const getLast12MonthsIndicator = async (indicator: string): Promise<IndicadorValue[]> => {
  const today = new Date();
  const pastDate = new Date();
  pastDate.setMonth(today.getMonth() - 11);

  const añoInicio = pastDate.getFullYear();
  const mesInicio = String(pastDate.getMonth() + 1).padStart(2, '0');
  const añoFin = today.getFullYear();
  const mesFin = String(today.getMonth() + 1).padStart(2, '0');

  const url = `${BASE_URL}/${indicator}/periodo/${añoInicio}/${mesInicio}/${añoFin}/${mesFin}`;

  console.log("url", url);
  try {
    const res = await axios.get<IndicadorResponse>(url, {
      params: {
        apikey: API_KEY,
        formato: 'json',
      },
    });

    const maybeValores = Object.values(res.data)[0];
    if (!Array.isArray(maybeValores)) {
      throw new Error('La respuesta no contiene un arreglo válido');
    }

    const valores = maybeValores as IndicadorValue[];

    // Asegurar que estén ordenados por fecha ascendente
    const ordered = valores.sort((a, b) => new Date(a.Fecha).getTime() - new Date(b.Fecha).getTime());

    return ordered;
  } catch (error) {
    console.error(`Error al obtener los últimos 12 meses de ${indicator}:`, error);
    throw error;
  }
};