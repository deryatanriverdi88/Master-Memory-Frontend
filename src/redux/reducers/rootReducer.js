import {combineReducers} from 'redux'
import loggedInReducer from "./loggedInReducer"
import currentUserReducer from './currentUserReducer'

export default combineReducers({
    loggedInReducer,
    currentUserReducer
})