import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
// import axios from 'axios'

import getStyles from './styles'
import { addNote } from 'actions/notes'

class NotesEditor extends Component {

  constructor (props) {
    super(props)

    this.clearEdit = this.clearEdit.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
    this.handleText = this.handleText.bind(this)

    this.state = {
      isOpenEditor: false,
      title: '',
      text: ''
    }
  }

  clearEdit (event) {
    event.preventDefault()
    this.willEmptyData()
  }

  willEmptyData () {
    this.setState({
      title: '',
      text: ''
    })
  }

  toggleEdit (event) {
    event.preventDefault()
    this.setState({isOpenEditor: !this.state.isOpenEditor})
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.addNote(this.state)
    // TODO
    axios.post('/api/notes', {
      title: this.state.title,
      text: this.state.text
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
    this.willEmptyData()
  }

  handleTitle (event) {
    this.setState({title: event.target.value})
  }

  handleText (event) {
    this.setState({text: event.target.value})
  }

  render () {
    const styles = getStyles()

    let editor
    if (this.state.isOpenEditor) {
      editor = (
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Write title'
            value={this.state.title}
            onChange={this.handleTitle}
          />
          <textarea
            placeholder='Write text'
            value={this.state.text}
            onChange={this.handleText}
          />
          <button>Save</button>
          <button onClick={this.clearEdit}>Clear</button>
        </form>
      )
    }
    return (
      <div>
        {editor}
        <button onClick={this.toggleEdit}>{
          this.state.isOpenEditor ? 'Close' : 'Open'
        }</button>
      </div>
    )
  }
}

NotesEditor.propTypes = {
  state: PropTypes.array.isRequired,
  addNote: PropTypes.func.isRequired
}

NotesEditor.contextTypes = {
  store: PropTypes.object.isRequired
}

export default connect(
  state => ({
    state
  }),
  {addNote}
)(NotesEditor)
