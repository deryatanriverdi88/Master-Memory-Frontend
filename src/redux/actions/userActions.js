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
            console.log(data.errors)
            dispatch(setErrorAction(data.errors))
        } else{
            console.log("user saved", "user:", data.user, "token:", data.token)
            AsyncStorage.setItem('token', JSON.stringify(data.token))
            AsyncStorage.setItem('id', JSON.stringify(data.user.id))
           AsyncStorage.getItem('token', (err, result) => {
            console.log(result)})
            dispatch(setUserAction(data.user))
        }
    })
    // console.log(userObj)
}

// const persistUser = () => dispatch => {
//     const config = {
//         method: 'GET',
//         headers: {
//             "Authorization": 
//         } 
//     }
// }

export default {
    newUserToDB
}