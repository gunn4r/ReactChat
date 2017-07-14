import { createStore, combineReducers } from 'redux'

import activeThreadId from './components/ThreadTabsContainer/reducer'
import threads from './components/ThreadDisplayContainer/reducer'

const reducer = combineReducers({
  activeThreadId,
  threads,
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

export default store
