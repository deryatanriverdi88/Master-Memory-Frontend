import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'
import { Formik } from 'formik'

export default class SignUpForm extends Component {
    render() {
        return (
          <View>
              <Text>Name:</Text>
              <TextInput/>
              <Text>Age:</Text>
              <TextInput/>
              <Text>Username:</Text>
              <TextInput/>
              <Text>Email:</Text>
              <TextInput/>
              <Text>Password:</Text>
              <TextInput/>
          </View>
        )
    }
}
