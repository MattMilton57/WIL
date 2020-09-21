{1}
// When writing a POST fetch, this is an important detail:
handleNewToy = (e) => {
    fetch ('http://localhost:3000/toys', {
      method: 'POST',
      body: JSON.stringify({
        name:e.name,
        image:e.image,
        likes:e.likes
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    },)
    .then (res => this.fetchToys(res))
  }
  // line 15 is a call to the initial fetch that updates the state for the objects that are being rendered on the screen. 
  // doing so will re-render the objects to include the new object or objects that were just added to the database without
  // refreshing the entire app. It is important to make sure that you are including the call in a .then line and that
  // are calling the line with the res => this.yourFunction(res) logic, as this means that your function will not execute
  // until there actually is a res for it to send into your function, therefore your get fetch isnt executing before 
  // your post fetch has had a chance to finish its posting task.

{2}
// Make sure that when you are sending props to a functional component that you destructure those props when you initialize
// the component like this:
const ToyContainer = ({toys, donate, like}) => {
  return(
    <div id="toy-collection">
      {toys.map( toy => <div><ToyCard like={like} donateMe={donate} toy={toy}/></div>)}
    </div>
  );
}
//on line 27, i had to declare each of the three props that i was bringing in before i could use them, once I did it was a simple
// matter to send them to the individual toy cards. 

{3}
// In a form, its a good idea to have a placeholder for an input, then specify the inputs value to match up with state, you have to 
// remember though to insert a command to clear state in your handle submit function so tht theinput clears up again for the next 
// entry.
<input 
type="text" 
name="name" 
placeholder="Enter a toy's name..." 
value={this.state.name}
className="input-text"
onChange={e=>{this.handleChange(e)}}/>

handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleNewToy(this.state)
    this.setState({
      name:'',
      image:''
    })
  }






