import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
// import promise from 'es6-promise'
// import 'isomorphic-fetch'

import App from 'components/App'
import Notes from 'reducers/notes'

injectTapEventPlugin()
// promise()

const middleware = applyMiddleware(logger())
const store = createStore(Notes, middleware)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
   document.getElementById('app')
)
