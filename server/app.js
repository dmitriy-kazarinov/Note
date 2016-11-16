import express from 'express'
import bodyParser from 'body-parser'
import * as db from './utils/UtilsDB'
import { serverPort } from '../etc/config.json'

db.setUpConnection()
const app = express()

app.use(bodyParser.json())

app.get('/notes', (req, res) => {
  db.listNotes().then(data => res.send(data))
})

app.post('/notes', (req, res) => {
  db.createNote().then(data => res.send(data))
})

app.delete('/notes/:id', (req, res) => {

})

app.listen(serverPort, () => {
  console.log(`Server is up on port ${serverPort}`)
})
