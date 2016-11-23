import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'

import getStyles from './styles'
import Note from 'components/Note'

class NotesGrid extends Component {
  render () {
    const styles = getStyles()
    return (
      <ul>
        {this.props.state.map((note, index) => {
          return <Note key={index} note={note} index={index} />
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
