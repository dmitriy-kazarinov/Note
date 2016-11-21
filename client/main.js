import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'

const initialState = [{
  title: 'title1',
  text: 'text1'
}]

const Notes = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        {
          title: action.data.title,
          text: action.data.text
        }
      ]
    default:
      return state
  }
}

const store = createStore(Notes)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('app')
)
