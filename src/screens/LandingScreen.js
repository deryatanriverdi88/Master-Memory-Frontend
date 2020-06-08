import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LoginForm from '../components/LoginForm'
import { useSelector, useDispatch} from 'react-redux'
import HomeScreen from './HomeScreen'
import userActions from '../redux/actions/userActions'


const LandingScreen = ({navigation}) => {
    const dispatch = useDispatch()
    useEffect(() => dispatch(userActions.persistUser()), [] )

    const current_user = useSelector(state => {
        console.log( "landing", state.currentUser.user)
        return state.currentUser.user
    })

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
