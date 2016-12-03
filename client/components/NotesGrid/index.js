import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import {List, ListItem} from 'material-ui/List';

import getStyles from './styles'
import Note from 'components/Note'

class NotesGrid extends Component {
  render () {
    const styles = getStyles()

    return (
      <div>
        <List>
          {this.props.state.map((note, index) => {
            return <ListItem key={index}><Note note={note} index={index} /></ListItem>
          })}
        </List>
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
