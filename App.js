import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native Practice</Text>
      <Text style={{...styles.text, color: "blue", fontStyle: 10}}>React Native Practice</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 25,
    color: "red",
    fontWeight: "bold",
  }
});
