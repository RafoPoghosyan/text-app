import { combineReducers } from 'redux'
import text from './text'
import auth from './auth'

export default combineReducers({
    text,
    user: auth
})