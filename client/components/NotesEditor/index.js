import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

import getStyles from './styles'
import { addNote } from 'actions/notes'

// TODO move to const file
const MIN_DATA = new Date();
const SELECTED_COLOR = '#00bb00';
const COLORS = [
  {
    name: 'Green',
    key: '#00bb00'
  },
  {
    name: 'Yellow',
    key: '#baca01'
  },
  {
    name: 'Red',
    key: '#ca0101'
  }
]

class NotesEditor extends Component {

  constructor (props) {
    super(props)

    this.clearEdit = this.clearEdit.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
    this.handleText = this.handleText.bind(this)
    this.handleDate = this.handleDate.bind(this)
    this.handleColor = this.handleColor.bind(this)

    this.state = {
      isOpenEditor: false,
      title: '',
      text: '',
      color: SELECTED_COLOR,
      date: null
    }
  }

  clearEdit (event) {
    event.preventDefault()
    this.willEmptyData()
  }

  willEmptyData () {
    this.setState({
      title: '',
      text: '',
      color: SELECTED_COLOR,
      date: null
    })
  }

  toggleEdit (event) {
    event.preventDefault()
    this.setState({isOpenEditor: !this.state.isOpenEditor})
  }

  handleSubmit (event) {
    event.preventDefault()
    // TODO
    axios.post('/api/notes', {
      title: this.state.title,
      text: this.state.text,
      color: this.state.color,
      date: this.state.date
    }).then((response) => {
      this.props.addNote(this.state)
      this.willEmptyData()
    }).catch((error) => {
      console.log(error)
    })
  }

  handleTitle (event) {
    this.setState({title: event.target.value})
  }

  handleText (event) {
    this.setState({text: event.target.value})
  }

  handleColor (event, index, value) {
    this.setState({color: value})
  }

  handleDate (event, date) {
    this.setState({date})
  }

  render () {
    const styles = getStyles()

    let editor
    if (this.state.isOpenEditor) {
      editor = (
        <div>
          <form onSubmit={this.handleSubmit}>
             <TextField
              hintText="Write title"
              value={this.state.title}
              onChange={this.handleTitle}
            />
            <DatePicker
              hintText="Add date"
              container="inline"
              mode="landscape"
              minDate={MIN_DATA}
              value={this.state.date}
              onChange={this.handleDate}
            />
            <SelectField
              floatingLabelText="Add color"
              value={this.state.color}
              onChange={this.handleColor}
            >
              {COLORS.map((color, index) => {
                return <MenuItem
                        key={index}
                        value={color.key}
                        primaryText={color.name}
                      />
              })}
            </SelectField>
            <div>
              <TextField
                hintText="Write text"
                value={this.state.text}
                onChange={this.handleText}
                multiLine
              />
            </div>

            <button>Save</button>
            <button onClick={this.clearEdit}>Clear</button>
          </form>
        </div>
      )
    }
    return (
      <div>
        {editor}
        <RaisedButton
          label={this.state.isOpenEditor ? 'Close editor' : 'Take a note'}
          onClick={this.toggleEdit}
          fullWidth={true}
          style={styles.openBtn}
        />
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
