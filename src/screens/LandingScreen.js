import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class LandingScreen extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <Text> I should show the login page </Text>
                <Text> and a button for sign up </Text>
            </View>
        )
    }
}
