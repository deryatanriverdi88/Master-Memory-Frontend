import {AsyncStorage} from 'react-native'
const BASE_URL = 'http://localhost:3000'
const USERS_URL = BASE_URL + '/users'
const PERSIST_URL = BASE_URL + '/profile'
const LOGIN_URL = BASE_URL + '/login'
const SIGNUP_URL = BASE_URL + '/signup'
const SPECIFIC_USER_URL = id => USERS_URL + "/" + id

const setUserAction = userObj => ({
    type: "SET_USER",
    payload: userObj
})

const clearUserAction = () => ({
    type: "CLEAR_USER"
})

const setErrorAction = errors => ({
    type: "SET_ERRORS",
    payload: errors
})

const newUserToDB = userObj => dispatch => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
    }
    fetch(SIGNUP_URL, config)
    .then(res => res.json())
    .then(data => {
        if (data.errors){
            dispatch(setErrorAction(data.errors))
        } else{
            AsyncStorage.setItem('token', JSON.stringify(data.token))
            AsyncStorage.setItem('id', JSON.stringify(data.user.id))
            // AsyncStorage.getItem('token', (err, result) => {
            // console.log(result)})
            dispatch(setUserAction(data.user))
        }
    })
}

const loginUserToDB = (userCredentials, navigation) => dispatch => {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userCredentials)
    }
    fetch(LOGIN_URL, config)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        if(data.error){
            // console.log(data.error)
            dispatch(setErrorAction(data.error))
        } else{
            AsyncStorage.setItem('token', JSON.stringify(data.token))
            AsyncStorage.setItem('id', JSON.stringify(data.user.id))
            // AsyncStorage.getItem('token', (err, result) => {
            // console.log(result)})
            dispatch(setUserAction(data.user))
            navigation.navigate('Home')
        }
    })
}

const persistUser = () => dispatch => {
    // const config = {
    //     method: 'GET',
    //     headers: {
    //         "Authorization":
    //     }
    // }
    // fetch(PERSIST_URL, config)
    // .then(res => res.json())
    // .then(userInstance => {
    //     console.log('persist', userInstance)
    //     dispatch(setUserAction(userInstance))
    // })
}

export default {
    newUserToDB,
    loginUserToDB,
    persistUser
}