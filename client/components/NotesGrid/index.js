import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import StackGrid from 'react-stack-grid'

import getStyles from './styles'
import Note from 'components/Note'

class NotesGrid extends Component {
  render () {
    const styles = getStyles()

    return (
      <div>
        <StackGrid
          columnWidth={250}
          gutterWidth={20}
          gutterHeight={20}
        >
          {this.props.state.map((note, index) => {
            return <Note key={index} note={note} index={index} />
          })}
        </StackGrid>
      </div>
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
