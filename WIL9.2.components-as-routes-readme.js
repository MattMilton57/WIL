{1}
// Pretty simple but remember when using router that you import it:
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Also, install it in the terminal with the command:
"npm install react-router-dom"

{2}
// Render code for router (though im not sure if this will get modified in later lessons so 
// im not putting it in a cheat sheet yet.)
ReactDOM.render((
    <Router>
      <div>
        <Route path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>),
    document.getElementById('root')
  );

  {3}
  // Pretty simple: When the URL matches this path display this component. 
  <Route exact path="/about" component={About} />

  {4}
  // there is a big difference between using "path" and "exact path" in your route
  <div>
    <Route path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </div>
  // Exact path tells the app that that component is only to be displayed when the URL 
  // navigates to it (using the specified path). path components are always displayed no
  // matter what. This works well for headers and footers. 
  (<div>
    <Route path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    <Route path="/" component={Footer} />
  </div>)

  {5}
  // this one had some nice templates. Fitst for an index page with routes:
  ReactDOM.render((
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Footer} />
      </div>
    </Router>),
    document.getElementById('root')
  );
  // above this is where you would put your component did mount, your initial state, 
  // and your fetches so that you could send that state info out as props to your components.

  // next was a great template for a navbar component: 
  class Navbar extends React.Component {
    render() {
      return (
        <div>
          <NavLink
            to="/"
            /* set exact so it knows to only set activeStyle when route is deeply equal to link */
            exact
            /* add styling to Navlink */
            style={link}
            /* add prop for activeStyle */
            activeStyle={{
              background: 'darkblue'
            }}
          >Home</NavLink>
          <NavLink
            to="/about"
            exact
            style={link}
            activeStyle={{
              background: 'darkblue'
            }}
          >About</NavLink>
          <NavLink
            to="/login"
            exact
            style={link}
            activeStyle={{
              background: 'darkblue'
            }}
          >Login</NavLink>
        </div>
      )
    }
  }
   
  export default Navbar;
// this created a series of buttons for navigation at the top of the page. perfect for a header.