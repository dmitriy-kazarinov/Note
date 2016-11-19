import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'

const initialState = {
  titleTextFirst: 'First note',
  titleTextSecond: 'Second note',
  notes: [ 1, 2 ]
}

const Note = (state = initialState, action) => {
  if (action.type === 'ADD_NOTE') {
    return [
      ...state,
      action
    ]
  }
  return state
}

const store = createStore(Note)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
   document.getElementById('app')
)
