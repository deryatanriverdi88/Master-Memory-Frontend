import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import LandingScreen from './src/screens/LandingScreen';
import SignUpForm from './src/components/SignUpForm'
import {Linking} from 'expo'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './src/redux/reducers/rootReducer'
import HomeScreen from './src/screens/HomeScreen'
import { AsyncStorage } from 'react-native';

const Stack = createStackNavigator()

const prefix = Linking.makeUrl('/')

const store = createStore(rootReducer, applyMiddleware(thunk))

const initialRoute = () => {
  if (AsyncStorage.getItem('token')){
    return "Home"
  }
  else {
    return "Login"
  }
}


export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen component={LandingScreen} name="Login"/>
            <Stack.Screen component={SignUpForm} name="Sign Up"/>
            <Stack.Screen component={HomeScreen} name="Home"/>
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}
