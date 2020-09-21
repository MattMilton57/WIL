{1}
import React from 'react';
 
const Book = ({ title, img_url }) => (
  <div className="book">
    <img src={ img_url } alt={title}/>
    <h3>{ title }</h3>
  </div>
)
 
export default Book;
// line 4: ({ title, img_url }) is a way of destructuring the prop that is coming in. the ({ ... }) is a 
// way of indicating that what is coming in is an object, and "title, img_url" is a way of defining the 
// contents of that object.

{2}
// this readme walked backwards through two presentational components into a container component. the 
// first presentational component and the final container component were pretty simple, but the idea of
// using the middle one as a psuedo container/presentational component to facilitate better abstraction 
// and future customization was interesting and worth looking into. 

{3}
// this was the container component:
import React from 'react';
import BookList from './BookList';
 
class BookListContainer extends React.Component {
  constructor() {
    super()
 
    this.state = {
      books: []
    };
  }
 
  componentDidMount() {
    fetch('https://learn-co-curriculum.github.io/books-json-example-api/books.json')
      .then(response => response.json())
      .then(bookData => this.setState({ books: bookData.books }))
  }
 
  render() {
    return <BookList books={this.state.books} />
  }
}
 
export default BookListContainer;
// Its a nice simple container component. line 36 makes an api call as soon as the page is loaded and 
// stores the fetched data into state. ones state has any data in it, on line 43 the data is sent to 
// <BookList /> as books. I like the simplicity of this, its easily adaptable for future use. Even return
// on line 43 doesnt establish a <div> or anything like that, It relies on <BookList /> to do that.
// Again, abstraction and ability to customize and adapt later on. 

{4}
// next up is <BookList /> the first presentational component:
import React from 'react';
import Book from './Book';
 
const BookList = ({ books }) => (
  <div className="book-list">
    { books.map(book => <Book title={book.title} img_url={book.img_url} />) }
  </div>
)
 
export default BookList;
// This one has some logic in it, but very little. Esentially its a bit of a container, as it "contains" all
// of the books, but even then its mostly presentational as its real purpose is to display all of the individual
// book objects. It acomplishes this by creating a <div> with the className "book-list" and then mapping 
// through all of the individual objects in the books object that were sent to it from BookListContainer.
// good to remember that "books" on line 59 is the name for the passed in props from BookListContainer. 

{5}
// finally, the last presentational component, <book />
import React from 'react';
 
const Book = ({ title, img_url }) => (
  <div className="book">
    <img src={ img_url } alt={title}/>
    <h3>{ title }</h3>
  </div>
)
 
export default Book;
// this one is also simple and is probably the most abstractable component that would be used in this 
// entire app. This component takes in a book object that has a title key and a img_url key, and returns a
// <div> with the classname of "book" which allows CSS rules to apply to it (line 77), an <img> that has
// the correct source url as well as an alt parameter that is the title of the book, and an <h3> of the 
// title of the book. This component could be called upon by any container that was interested in displaying
// a single book, or any presentational component that was interested in pooling together multiple
// books for display or for constructing individual book cards or multiple other uses. 