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

export function createNote (data) {
  const note = new Note({
    title: data.title,
    text: data.text,
    color: data.color,
    date: data.date
  })

  return note.save()
}

export function deleteNote (id) {
  return Note.findById(id).remove()
}
