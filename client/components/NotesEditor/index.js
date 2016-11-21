import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'

import getStyles from './styles'

function addNote (data) {
  return {
    type: 'ADD_NOTE',
    data
  }
}

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
        <button onClick={this.toggleEdit}>{
          this.state.isOpenEditor ? 'Close' : 'Open'
        }</button>
        {editor}
      </div>
    )
  }
}

NotesEditor.propTypes = {
  state: PropTypes.array.isRequired,
  addNote: PropTypes.func.isRequired
}

NotesEditor.contextTypes = {
  store: PropTypes.object
}

export default connect(
  state => ({
    state
  }),
  {addNote}
)(NotesEditor)
