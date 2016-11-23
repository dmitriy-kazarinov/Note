export function addNote (state) {
  return {
    type: 'ADD_NOTE',
    data: state
  }
}

export function deleteNote (index) {
  return {
    type: 'DELETE_NOTE',
    index
  }
}
