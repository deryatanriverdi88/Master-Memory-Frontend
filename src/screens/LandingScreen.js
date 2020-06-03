import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LoginForm from '../components/LoginForm'

const LandingScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.login}> Login </Text>
            <LoginForm navigate={navigation.navigate}/>
        </View>
    )
}

export default LandingScreen

const styles = StyleSheet.create({
    login: {
        fontSize: 20,
        fontWeight: "bold"
    }
  })
