import React from 'react'
import { connect } from 'react-redux'

import getStyles from './styles'

class NotesEditor extends React.Component {

  clearEdit(event) {
    event.preventDefault()
    this.noteTitle.value = ''
  }

  render () {
    const styles = getStyles()

    return (
      <div>
        <input type='text' ref={title => this.noteTitle = title} />
        <button onClick={this.clearEdit.bind(this)}>Clear</button>
      </div>
    )
  }
}

NotesEditor.propTypes = {
  state: React.PropTypes.object
}

export default connect(
  state => ({
    state
  }),
  dispatch => ({})
)(NotesEditor)
