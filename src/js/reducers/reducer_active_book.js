// state argument is not app state, only state this reducer is responsible for
export default function(state = null, action) {

  if(action.type === 'BOOK_SELECTED') {
    return action.payload
  }

  return state
}
