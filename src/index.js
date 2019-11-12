import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
  },
});

console.tron.warn('Hello World');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hello world</Text>
    </View>
  );
}
