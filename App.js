import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { StyleSheet, Text, View } from 'react-native';
import LandingScreen from './src/screens/LandingScreen';
import SignUpForm from './src/components/SignUpForm'

const Stack = createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="landing">
       <Stack.Screen component={LandingScreen} name="landing"/>
       <Stack.Screen component={SignUpForm} name="signUp"/>
     </Stack.Navigator>
   </NavigationContainer>
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
