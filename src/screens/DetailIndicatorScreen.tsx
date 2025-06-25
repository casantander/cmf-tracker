import React, { useEffect } from 'react';
import { MainParamList } from '../types/navigationTypes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getLast12MonthsIndicator, getLast30DaysIndicator } from '../api/cmf-service';
import { useState } from 'react';
import { SkeletonListValues } from '../components/SkeletonListValues';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { LineChart, LineChartProvider } from 'react-native-wagmi-charts';
import { HStack } from '@react-native-material/core';

type Props = NativeStackScreenProps<MainParamList, 'Detalle'>;

export const DetailIndicatorScreen: React.FC<Props> = ({ route }) => {

  const { width } = Dimensions.get('window');
  const { indicator } = route.params;
  const [loading, setLoading] = useState(true);
  const [chartState, setChartState] = useState<{ timestamp: number; value: number }[]>([]);

  useEffect(() => {
    const processData = async () => {
    try {
      if (indicator.key === 'utm' || indicator.key === 'ipc') {
        const dataLast12Months = await getLast12MonthsIndicator(indicator.key.toLowerCase());

        const ordered = dataLast12Months.sort((a, b) => new Date(a.Fecha).getTime() - new Date(b.Fecha).getTime());

        const chartData = ordered.map(item => ({
          timestamp: new Date(item.Fecha).getTime(),
          value: parseFloat(item.Valor.replace(',', '.')),
        }));

        setChartState(chartData);
      } else {
        const dataLastDays = await getLast30DaysIndicator(indicator.key.toLowerCase());
        const orderedData = dataLastDays.sort((a, b) => new Date(a.Fecha).getTime() - new Date(b.Fecha).getTime());
        const last10Days = orderedData.slice(-10);

        const chartData = last10Days.map(item => ({
          timestamp: new Date(item.Fecha).getTime(),
          value: parseFloat(item.Valor.replace(',', '.')),
        }));

        setChartState(chartData);
      }
    } catch (error) {
      console.error("Error al obtener los valores:", error);
    } finally {
      setLoading(false);
    }
  };

    processData();
  }, [indicator.key]);

  const yValues = chartState.map(p => p.value);
  const minY = Math.min(...yValues);
  const maxY = Math.max(...yValues);
  const midY = (maxY + minY) / 2;

  const yTicks = [maxY, midY, minY].map(v => v.toFixed(2));

  const xTicks = chartState.map((p, i) =>
    i % 3 === 0
      ? new Date(p.timestamp).toLocaleDateString('es-CL', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
      : ''
  );

  const formatLabel = (value: number | string) => {
    return indicator.key === 'ipc' ? `${value}%` : `$${value}`;
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('es-CL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  return (
    <>
      {loading ? (
        <SkeletonListValues />
      ) : (
        <>
          <Text style={styles.title}>{formatLabel(chartState[chartState.length - 1].value)}</Text>

          <HStack m={4} spacing={6} style={{marginHorizontal:16}}>
            <Text style={{...styles.info, textAlign:'left'}}>Nombre</Text>
            <Text style={{...styles.info, textAlign:'right'}}>{indicator.key.toUpperCase()}</Text>
          </HStack>

          <HStack m={4} spacing={6} style={{marginHorizontal:16, marginBottom: 32}}>
            <Text style={{...styles.info, textAlign:'left'}}>Fecha</Text>
            <Text style={{...styles.info, textAlign:'right'}}>{formatDate(chartState[chartState.length - 1].timestamp)}</Text>
          </HStack>
        
          <View style={styles.container}>
            <View style={styles.chartArea}>
              <View style={styles.yAxis}>
                {yTicks.map((label, index) => (
                  <Text key={index} style={styles.yAxisLabel}>
                    {formatLabel(label)}
                  </Text>
                ))}
              </View>

              <View style={{ flex: 1}}>
                <LineChartProvider data={chartState}>
                  <LineChart height={200} width={width-90}>
                    <LineChart.Path color="#1E90FF" />
                    <LineChart.CursorCrosshair>
                      <LineChart.Tooltip
                        style={styles.tooltip}
                        format={({ value }) => {
                          'worklet';
                          return `$${parseFloat(value).toFixed(2)}`;
                        }}
                      />
                    </LineChart.CursorCrosshair>
                  </LineChart>
                </LineChartProvider>

                <View style={styles.xAxis}>
                  {xTicks.map((label, index) => (
                    <Text key={index} style={styles.xAxisLabel}>
                      {label}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d0d0d0',
  },
  title: {
    textAlign:'center', 
    justifyContent:'center',
    fontSize: 32,
    color: '#005AEE',
    marginVertical: 16,
    fontWeight: 'bold'
  },
  info: {
    textAlign:'center', 
    justifyContent:'center',
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    flex: 1,
    marginHorizontal:32
  },
  chartArea: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  yAxis: {
    justifyContent: 'space-between',
    marginRight: 0,
    height: 200,
  },
  yAxisLabel: {
    fontSize: 10,
    color: '#444',
  },
  xAxis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  xAxisLabel: {
    fontSize: 10,
    color: '#666',
    minWidth: 20,
    textAlign: 'center',
  },
  tooltip: {
    backgroundColor: '#1E90FF',
    borderRadius: 6,
    padding: 4,
  },
});
