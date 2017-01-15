import mongoose from 'mongoose'
import '../models/Note'

const Note = mongoose.model('Note')

mongoose.Promise = global.Promise

export function setUpConnection () {
  mongoose.connect(`mongodb://test:test@ds011893.mlab.com:11893/note`)
}

export function listNotes () {
  return Note.find()
}

export function createNote (data = {}) {
  console.log(data)
  const empty = ''
  const note = new Note({
    title: data.title || empty,
    text: data.text || empty,
    color: data.color || empty,
    date: data.date || empty
  })

  return note.save()
}

export function deleteNote (id) {
  return Note.remove({ _id: id })
}
