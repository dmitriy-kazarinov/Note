import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import Notes from './notes'

export default combineReducers({
  routing: routerReducer,
  Notes
})
