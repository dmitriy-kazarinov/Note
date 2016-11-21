import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'

import getStyles from './styles'

class NotesGrid extends Component {
  render () {
    const styles = getStyles()
    return (
      <ul>
        {this.props.state.map((note, index) => {
          return <li key={index}>{note.text}</li>
        })}
      </ul>
    )
  }
}

NotesGrid.propTypes = {
  state: PropTypes.array
}

export default connect(
  state => ({
    state
  }),
  dispatch => ({})
)(NotesGrid)
