import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>결과: {number} </Text>
      <View style={styles.btnGroup}>
        <Button style={styles.btn} title="증가" onPress={() => setNumber(number + 1)}/>
        <Button style={styles.btn} title="감소" onPress={() => setNumber(number - 1)}/>
      </View>
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
    fontWeight: "bold",
  },

  btnGroup: {
    flexDirection: "row",
    gap: 10,
  },

  btn: {
    width: 200,
    height: 100
  }

  
});
