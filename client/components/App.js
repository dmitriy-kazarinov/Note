import React from 'react'
import { connect } from 'react-redux'

import Title from './Title'
import Note from './Note'
import NotesGrid from './NotesGrid'
import NotesEditor from './NotesEditor'

class App extends React.Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     topTitle: 'Motivation Notes',
  //     testTitle: 'Test',
  //     notes: []
  //   }
  // }

  // removeNote(noteId){
  //   if (!noteId) {
  //     return
  //   }
  //
  //   const notes = this.state.notes.filter(
  //     note => note.id !== noteId
  //   )
  //
  //   this.setState({ notes })
  // }

  render () {
    console.log(this.props.notes)
    return (
      <div>
        <Title text={this.props.titleTextFirst} strong />
        <Title text={this.props.titleTextSecond} />
        <Note />
        <NotesGrid />
        <NotesEditor notes={this.props.notes} />
      </div>
    )
  }
}

App.propTypes = {
  titleTextFirst: React.PropTypes.string,
  titleTextSecond: React.PropTypes.string,
  notes: React.PropTypes.array
}

export default connect(
  state => ({
    titleTextFirst: state.titleTextFirst,
    titleTextSecond: state.titleTextSecond,
    notes: React.PropTypes.array
  }),
  dispatch => ({})
)(App)
