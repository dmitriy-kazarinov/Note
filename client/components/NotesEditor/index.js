import React from 'react'
import { connect } from 'react-redux'

import getStyles from './styles'

class NotesEditor extends React.Component {

  _handleSubmit(event) {
    event.preventDefault()
    this.newNote.value = ''
  }

  render () {
    const styles = getStyles()

    return (
      <div>
        <input ref={text => this.newNote = text} />
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
