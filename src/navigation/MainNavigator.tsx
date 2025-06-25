import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FinancialIndicartorsScreen } from '../screens/FinancialIndicartorsScreen';
import { DetailIndicatorScreen } from '../screens/DetailIndicatorScreen';
import { ListValuesScreen } from '../screens/ListValuesScreen';
import { MainParamList } from '../types/navigationTypes';

const Main = createStackNavigator<MainParamList>();

export const MainNavigator = () => {
  return (
      <Main.Navigator
        screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor: '#005AEE',
        },
        cardStyle: {
          backgroundColor: 'white'
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}
      >
        <Main.Screen name="Indicadores" component={FinancialIndicartorsScreen} />
        <Main.Screen name="Detalle" component={DetailIndicatorScreen} />
        <Main.Screen name="ListaValores" component={ListValuesScreen} options={{title:'Lista de Valores'}} />
      </Main.Navigator>
  );
};