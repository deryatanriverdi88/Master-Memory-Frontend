import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import LoginForm from '../components/LoginForm'

export default class LandingScreen extends Component {
    render() {
        return (
            <View>
                <Text style={styles.login}> Login </Text>
                <LoginForm />
                <Button title="Dont have an Account? Sign up here!" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    login: {
        fontSize: 20,
        fontWeight: "bold"
    }
  })
