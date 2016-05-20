import React, {
  Component
} from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/selectBook'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  constructor(props) {
    super(props)
  }

  renderList() {
    console.log(this.props)
    return this.props.books.map((book, i) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={i}>{book.title}</li>
      )
    })
  }

  render() {
    return( <ul>
      {this.renderList()}
    </ul>
    )
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props in BookList
  return {
    books: state.books
  }
}

// anything returned from this function will end up as props on BookList conainer
function mapDispatchToProps(dispatch) {
  // when selectBook is called the result should be passed to all reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList)
