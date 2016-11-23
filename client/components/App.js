import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'

import Title from './Title'
import NotesGrid from './NotesGrid'
import NotesEditor from './NotesEditor'

const title = 'Note motivation'

class App extends Component {

  render () {
    return (
      <div>
        <Title text={title} strong />
        <NotesGrid />
        <NotesEditor />
      </div>
    )
  }
}

App.propTypes = {
  state: PropTypes.array.isRequired
}

export default connect(
  state => ({
    state
  }),
  dispatch => ({})
)(App)
