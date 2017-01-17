export default function Notes (state = [], action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        {
          title: action.data.title,
          text: action.data.text,
          color: action.data.color,
          date: action.data.date
        }
      ]
    case 'DELETE_NOTE':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    case 'LOAD_NOTES':
      return [
        ...state,
        ...action.data
      ]
    default:
      return state
  }
}
