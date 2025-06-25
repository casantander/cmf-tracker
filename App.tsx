import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { MainNavigator } from './src/navigation/MainNavigator';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <MainNavigator/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
