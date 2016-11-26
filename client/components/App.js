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
    fetch('/api/notes').then((response) => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`)
        return
      }
      response.json().then((data) => {
        this.props.loadNotes(data)
      })
    }).catch((err) => {
      console.log('Fetch Error :-S', err)
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
