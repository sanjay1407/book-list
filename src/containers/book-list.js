import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{

  renderList(){
    return this.props.books.map((book)=>{
      return(
        <li
          key={book.title}
          onClick={ ()=> this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  //whatever is returned from here will show as props in container
  return{
    books: state.books
  };
}

//Anything returned from this function will be passed as props to bookList container. In container we can do this.props.selectBook
function mapDispatchToProps(dispatch){
  // Whenever selectBook is called result should be passed to all of our reducers. dispatch serves this purpose.
  //1st selectBook is props and 2nd selectBook is the actual action creator that we imported.
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

//Promote BookList from a component to a container - it needs to know about this new disatch method, selectBook. make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//this will connect to container
//Connect takes a function and a Component and producers a container.
