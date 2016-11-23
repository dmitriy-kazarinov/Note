import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'

import getStyles from './styles'
import { deleteNote } from 'actions/notes'

class Note extends Component {
  constructor (props) {
    super(props)

    this.removeNote = this.removeNote.bind(this)
  }

  removeNote (event) {
    event.preventDefault()
    this.props.deleteNote(this.props.item)
  }

  render () {
    const styles = getStyles()

    return (
        <li>
          {this.props.data.text}
          <button onClick={this.removeNote}>
            del
          </button>
        </li>
    )
  }
}

Note.propTypes = {
  state: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  deleteNote: PropTypes.func.isRequired,
  item: PropTypes.number.isRequired
}

Note.contextTypes = {
  store: PropTypes.object.isRequired
}

export default connect(
  state => ({
    state
  }),
  {deleteNote}
)(Note)
