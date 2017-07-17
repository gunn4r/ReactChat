import { combineReducers } from 'redux'

import activeThreadId from './components/App/reducers/activeThreadId'
import threads from './components/App/reducers/threads'

const reducer = combineReducers({
  activeThreadId,
  threads,
})

export default reducer
