import React, {
  Component
} from 'react'
import { connect } from 'react-redux'

class BookList extends Component {
  constructor(props) {
    super(props)
  }

  renderList() {
    console.log(this.props)
    return this.props.books.map((book, i) => {
      return (
        <li key={i}>{book.title}</li>
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



export default connect(mapStateToProps)(BookList)
