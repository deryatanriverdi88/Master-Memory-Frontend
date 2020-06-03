import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import LandingScreen from './src/screens/LandingScreen';
import SignUpForm from './src/components/SignUpForm'
import {Linking} from 'expo'

const Stack = createStackNavigator()

const prefix = Linking.makeUrl('/')

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

