{1}
// The main point of this lab was using a nav bar to demonstrate how to do routing from inside a component. 
// also, the use of router to set up routing within an app. for router, you have to first import it into your app
// component (your home containder):
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
// You can then use it as a jsx element to contain the elements you with to render on the page:
const App = (props) => {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/actors" component={Actors} />
          <Route exact path="/directors" component={Directors} />
          <Route exact path="/movies" component={Movies} />
        </div>
      </Router>
    );
  };
// here NavBar is on line 14, its lack of a route means that it is to be rendered on the page at all times, though 
// though its individual component its form can be altered. lines 15 through 18 show the mutable components of the 
// app

{2}
// I assembled three functional components that took in props and created div's with each prop. each had to map through 
// a list of props and then map through a sublist of items within the prop.
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
// a few tricky things: 
// * on line 32 I had to define the props being passed in before i could use them. 
// * on line 42 it took some trial and error before i could figure out the format for calling a function within the jsx in a
// functional component.
// * important to remember that a functional component is just a list of defined consts with the const connected to export default 
// at the bottom being the one that actually gets sent to the page calling it. 