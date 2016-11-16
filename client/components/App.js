import React from 'react'

import Title from './Title'
import Note from './Note'
import NotesGrid from './NotesGrid'
import NotesEditor from './NotesEditor'

const topTitle = 'Motivation Notes'
const testTitle = 'Test text'

const App = React.createClass({
  render () {
    return (
      <div>
        <Title text={topTitle} strong />
        <Title text={testTitle} />
        <Note />
        <NotesGrid />
        <NotesEditor />
      </div>
    )
  }
})

export default App
