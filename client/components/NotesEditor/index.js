import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


import getStyles from './styles'
import { addNote } from 'actions/notes'

// TODO move to const file
const MIN_DATA = new Date();
const SELECTED_COLOR = '#beffd0';
const COLORS = [
  {
    name: 'Green',
    key: '#beffd0'
  },
  {
    name: 'Yellow',
    key: '#fff5be'
  },
  {
    name: 'Red',
    key: '#ffbebe'
  }
]
const DRAWER_WIDTH = 285

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
      isOpenEditor: false,
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

  handleSubmit () {
    // TODO
    axios.post('/api/notes', {
      title: this.state.title,
      text: this.state.text,
      color: this.state.color,
      date: this.state.date
    }).then((response) => {
      this.props.addNote(this.state)
      this.willEmptyData()
    }).catch((err) => {
      console.error(err)
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

    return (
      <div>
        <div style={styles.centered}>
          <FloatingActionButton
            onClick={this.toggleEdit}
            style={styles.openBtn}
          >
            <ContentAdd />
          </FloatingActionButton>
        </div>
        <Drawer
          docked={false}
          width={DRAWER_WIDTH}
          open={this.state.isOpenEditor}
          onRequestChange={(isOpenEditor) => this.setState({isOpenEditor})}
        >
          <div style={styles.formWrapper}>
           <div style={styles.centered}>Create a note</div>
            <form onSubmit={this.handleSubmit}>
               <TextField
                hintText="Write title"
                value={this.state.title}
                onChange={this.handleTitle}
              />
              <DatePicker
                hintText="Add date"
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

              <RaisedButton
                label="Save"
                primary
                onClick={this.handleSubmit}
                style={styles.submitBtn}
              />
              <RaisedButton
                label="Clear"
                secondary
                onClick={this.clearEdit}
              />
            </form>
          </div>
        </Drawer>
      </div>
    )
  }
}

NotesEditor.propTypes = {
  state: PropTypes.object.isRequired,
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
