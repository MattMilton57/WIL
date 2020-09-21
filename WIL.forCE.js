// I like the way that this fetch uses line 7 to set state. I am wondering if i can abstract that a bit
// so that i have each diferent API address for each kind of fetch I need to make defined as a variable
// at the top of my index page, then when I need to fetch something I can send a universal callback with 
// the propper variables, one of which is the name of the declared variable that gets inserted as the 
// address of the fetch.

const CoolStuff = {
componentDidMount() {
    fetch('https://learn-co-curriculum.github.io/books-json-example-api/books.json')
      .then(response => response.json())
      .then(bookData => this.setState({ books: bookData.books }))
  }
}