import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LoginForm from '../components/LoginForm'
import { useSelector, useDispatch} from 'react-redux'
import HomeScreen from './HomeScreen'
import userActions from '../redux/actions/userActions'


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
