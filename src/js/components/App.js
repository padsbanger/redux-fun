import React, {
  Component
} from 'react'
import ReactDOM from 'react-dom'
import {combineReducers, createStore} from 'redux'
import { Provider } from 'react-redux'
import BookReducer from '../reducers/reducer_books'
import ActiveBook from '../reducers/reducer_active_book'

import BookList from '../containers/BookList'
import BookDetails from '../containers/BookDetails'

const rootReducer = combineReducers({
  books: BookReducer,
  activeBook : ActiveBook
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
          <BookDetails />
        </div>
      </Provider>
    )
  }
}

export default App
