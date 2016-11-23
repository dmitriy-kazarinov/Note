import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import App from 'components/App'
import Notes from 'reducers/notes'

const middleware = applyMiddleware(logger())
const store = createStore(Notes, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('app')
)
