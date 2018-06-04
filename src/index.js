import React from 'react'
import { render } from 'react-dom'
import configureStore from './store'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'

const basename = process.env.PUBLIC_PATH || '/'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)