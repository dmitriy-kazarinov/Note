import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Router, Route, hashHistory } from 'react-router'
import thunk from 'redux-thunk'
import { syncHistoryWithStore } from 'react-router-redux'
// import promise from 'es6-promise'
// import 'isomorphic-fetch'

import App from 'components/App'
import About from 'components/About'
import reducer from 'reducers'

injectTapEventPlugin()
// promise()

const middleware = applyMiddleware(logger(), thunk)
const store = createStore(reducer, middleware)
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history}>
        <Route path='/' component={App} />
        <Route path='/about' component={About} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
   document.getElementById('app')
)
