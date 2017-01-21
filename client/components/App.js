import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'

import { loadNotes } from 'actions/notes'
import Title from './Title'
import NotesGrid from './NotesGrid'
import NotesEditor from './NotesEditor'
import Menu from './Menu'

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
    .catch((err) => {
      console.error(err)
    })
  }

  render () {
    return (
      <div>
        <Menu />
        <Title text={title} strong />
        <NotesEditor />
        <NotesGrid />
      </div>
    )
  }
}

App.propTypes = {
  state: PropTypes.object.isRequired,
  loadNotes: PropTypes.func.isRequired
}

export default connect(
  state => ({
    state
  }),
  {loadNotes}
)(App)
