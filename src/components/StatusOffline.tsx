import { View, Text, StyleSheet } from 'react-native';

export const StatusOffline = () => (
  <View style={styles.container}>
    <Text style={styles.text}>No estás conectado a Internet</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffcccc',
    padding: 10,
    borderRadius: 8,
    margin: 10,
  },
  text: {
    color: '#cc0000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});