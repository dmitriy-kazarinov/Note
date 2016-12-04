import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'

import { ListItem } from 'material-ui/List'

import getStyles from './styles'
import { deleteNote } from 'actions/notes'

class Note extends Component {
  constructor (props) {
    super(props)

    this.removeNote = this.removeNote.bind(this)
  }

  removeNote (event) {
    event.preventDefault()
    axios.delete(`/api/note/${this.props.note._id}`)
    .then((response) => {
      this.props.deleteNote(this.props.index)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render () {
    const styles = getStyles()

    return (
        <ListItem>
          <div>
            <div>{this.props.note.title}</div>
            <div>{this.props.note.text}</div>
          </div>
          <button onClick={this.removeNote}>
            del
          </button>
        </ListItem>
    )
  }
}

Note.propTypes = {
  state: PropTypes.array.isRequired,
  note: PropTypes.object.isRequired,
  deleteNote: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
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
