import { combineReducers } from 'redux'

import state from './state'
import userSession from './userSession'

const rootReducer = combineReducers({
  state,
  userSession
})

export default rootReducer