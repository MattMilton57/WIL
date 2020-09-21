// Build a component from scratch
import React from 'react';
class App extends React.Component {

  constructor() {
    super();
    this.state= {
      placeHolder: []
    }
  }

  componentDidMount(){
    console.log('mounted')
  }

  render(){
    return(
      <div>
        <li>placeholder</li>
      </div>
    )
  }

} export default App



// Create a class component
import React from 'react';
class NotANewb extends React.Component{
    render() {
        return <h1>Totally a Newb</h1>
    }
}export default NotANewb




// an example of a functional presentational component:
const defaultLimit = 100
 
const TextField = (props) =>
  <input
    className="field field-light"
    onChange={props.onChange}
    limit={props.limit || defaultLimit}
  />;



  // A "pure" presentational component looks like this:
import React from 'react';

const SimplerComponent = props => <div onClick={props.handleClick()}>"I am just happy</div>

export default SimplerComponent

//Import react router:
import { BrowserRouter as Router, Route } from 'react-router-dom';

// a functional component with a function being called within the return.
import { movies } from '../data';

const ourMovies = movies

const genTitle = ourMmovies => {
return ourMovies.map(movie => <div>{movie.title} {movie.time} {movie.genres.map(genre => <li>{genre}</li>)}</div>)
}

const Movies = (movies) => {
  return (
    <div>
      <h1>Movies Page</h1>
      {genTitle()}
    </div>
  );
};

export default Movies;



