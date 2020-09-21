{1}
// abstraction is good, but go ahead and set state within the fetch. it looks like this. 
class App extends Component {
    state = {
      peopleInSpace: []
    }  
    render() {
      return (
        <div>
          {this.state.peopleInSpace.map(person => person.name)}
        </div>
      )
    }
    componentDidMount() {
      fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            peopleInSpace: data.people
          })
        })
    }
  }

{2}
// also good to remember, the use of a fetch in an event:
class App extends Component {
  handleClick = event => {
    fetch('your API url')
      .then(res => res.json())
      .then(json => this.setState({data: json}))
  }
   
  render() {
    return (
      <button onClick={this.handleClick}>Click to Fetch!</button>
    )
  }
}
// for instances where you might be fetching all data for a specific thing, like bringing up a pop up for 
// price tracking of a movie on blu-ray.com, or bringing up a list of a individual students other teachers
// and participation grades in class engage.

{3}
// proceure is a little bit differtnt for a POST request, this is a great example that also uses some nice
// abstraction:
class App extends Component{
    state = {
        username: "",
        password: ""
      }
       
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        })
      }

      handleSubmit = event => {
        event.preventDefault()
        fetch('the server URL', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.state)
        })
      }
       
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <input type="text" id="username" value={this.state.username} onChange={this.handleChange}/>
            <input type="text" id="password" value={this.state.password} onChange={this.handleChange}/>
          </form>
        )
      }
}

// line 53 is a great example of abstracting a function. "since the id values are the same as the 
// keys in state, we can write an abstract setState here" so, since handleChange is firing with the 
// onChange event (which in this case fires with every keystroke), if you were typing in the "password"
// input, each keystroke would send an event to the handleChange function and that event would include
// the contents of the input box (value) as well as its ID (....ID), line 55 pulls those out and puts them
// into the correct format for a setState function. Very clean. 

// line 66 is interesting, usingall of state for your submission. I would think it would be better for the 
// form component to have its own state (though, maybe thats what this is doing and im just missing tohe 
// forest for the trees here because its in app?) 


