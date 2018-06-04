import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import taskReducer from '../reducers'

export default function configureStore() {
  return createStore(
    taskReducer,
    composeWithDevTools()
  )
}
