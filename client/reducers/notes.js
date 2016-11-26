export default function Notes (state = [], action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        {
          title: action.data.title,
          text: action.data.text
        }
      ]
    case 'DELETE_NOTE':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    case 'LOAD_NOTES':
      console.log(action.data)
      return [
        ...state,
        ...action.data
      ]
    default:
      return state
  }
}
