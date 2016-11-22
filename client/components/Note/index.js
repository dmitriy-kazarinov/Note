import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'

import getStyles from './styles'

class Note extends Component {
  render () {
    const styles = getStyles()

    return (
      <div>
        Note
      </div>
    )
  }
}

Note.propTypes = {
  state: PropTypes.array.isRequired
}

export default connect(
  state => ({
    state
  }),
  dispatch => ({})
)(Note)
