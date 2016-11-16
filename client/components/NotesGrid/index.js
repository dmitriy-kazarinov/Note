import React from 'react'
import { connect } from 'react-redux'

import getStyles from './styles'

class NotesGrid extends React.Component {
  render () {
    const styles = getStyles()

    return (
      <ul>
        {this.props.notesGrid.map((note, index) => {
          return <li key={index}>{note}</li>
        })}
      </ul>
    )
  }
}

NotesGrid.propTypes = {
  notesGrid: React.PropTypes.array
}

export default connect(
  state => ({
    notesGrid: state
  }),
  dispatch => ({})
)(NotesGrid)
