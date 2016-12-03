import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'

import { loadNotes } from 'actions/notes'
import Title from './Title'
import NotesGrid from './NotesGrid'
import NotesEditor from './NotesEditor'

const title = 'Note motivation'

class App extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    // TODO
    axios.get('/api/notes')
    .then((response) => {
      this.props.loadNotes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render () {
    return (
      <div>
        <Title text={title} strong />
        <NotesGrid />
        <NotesEditor />
      </div>
    )
  }
}

App.propTypes = {
  state: PropTypes.array.isRequired,
  loadNotes: PropTypes.func.isRequired
}

export default connect(
  state => ({
    state
  }),
  {loadNotes}
)(App)
