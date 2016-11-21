import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'

import Title from './Title'
import Note from './Note'
import NotesGrid from './NotesGrid'
import NotesEditor from './NotesEditor'

class App extends Component {

  render () {
    return (
      <div>
        <Title text='test1' strong />
        <Title text='test2' />
        <Note />
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
