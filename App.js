import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Text>React Native Practice</Text>
      <Text style={{ fontSize: 50}}>결과: {number}</Text>
      <View style={{ flexDirection: "row", gap: 10}}>
        <Button title="증가" onPress={() => setNumber(number + 1)} />
        <Button title="감소" onPress={() => setNumber(number - 1)} />
      </View>
=======
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
>>>>>>> ae7db85bf9750c4b540ee79c7f3cfd7c5342fb44
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
});
