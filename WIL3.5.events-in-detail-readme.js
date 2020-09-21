{1}
// Accessing event data 
// we use the 'e' in the arrow function of a handler function if we want to pull out specific information from 
// the event itself. this looks like this:
export default class Clicker extends React.Component {
    handleClick = (e) => {
        console.log(e.type)
    }
    
    render() {
        return (
            <button onClick={this.handleClick}>Click Me!</button>
        )
    }
}
// handleClick can also include:
handleClick = (e) => {
    console.log(e.target.value)
}
// to grab the value of a text box or something
handleClick = (e) => {
    e.preventDefault()
}
// to keep the page from reloading every time the action is performed.

{2}
// "Event Pooling": Whenever an event fires, its event data is sent as an object to the callback function 
// that it is designated to. That object is then cleaned up so that it is in a blank state for use next time
// the event fires (like it jumped in a pool. ha ha ha). This means that we cant access that data from that 
// event object in an asynchronous manner (like setting it as state) because its allready gone by the time 
// we try to get to it. a common solution to this is to set the data to a variable in the handler function, or 
// to use the event.persist() function (as if i know what the hell that is. )
