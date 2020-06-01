import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LandingScreen from './src/screens/LandingScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LandingScreen/>
      {/* <Text>Hello</Text> */}
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
