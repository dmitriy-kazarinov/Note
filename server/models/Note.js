import mongoose from 'mongoose'

const Schema = mongoose.Schema

const NoteSchema = new Schema({
  title: {type: String, required: true},
  text: {type: String, required: true},
  color: {type: String, required: true},
  date: {type: Date, required: true}
})

const Note = mongoose.model('Note', NoteSchema)
