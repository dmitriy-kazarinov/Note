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
    default:
      return state
  }
}
