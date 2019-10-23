import {combineReducers} from 'redux'
import cities from './cities'
import auth from './auth'

export default combineReducers({
  cities,
  auth
})