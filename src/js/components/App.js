import React, {
  Component
} from 'react'
import ReactDOM from 'react-dom'
import {combineReducers, createStore} from 'redux'
import { Provider } from 'react-redux'
import BookReducer from '../reducers/reducer_books'

import BookList from '../containers/BookList'

const rootReducer = combineReducers({
  books: BookReducer
})


let store = createStore(rootReducer)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    }
  }

  render() {
    return(
      <Provider store={store}>
        <div>
          <BookList />
        </div>
      </Provider>
    )
  }
}

export default App
