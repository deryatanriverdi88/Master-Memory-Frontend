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
     <Stack.Navigator initialRouteName="Login">
       <Stack.Screen component={LandingScreen} name="Login"/>
       <Stack.Screen component={SignUpForm} name="Sign Up"/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}

