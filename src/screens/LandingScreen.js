import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'

export default class LandingScreen extends Component {
    render() {
        return (
            <View>
                <Text style={styles.login}> Login </Text>
                <LoginForm navigate={this.props.navigation.navigate}/>
                {/* <SignUpForm /> */}
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
