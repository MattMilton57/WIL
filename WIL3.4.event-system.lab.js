{1}
//its really a good idea to practice out writing my own compoents from scratch instead of always copying and pasting them
//I feel like it will eventually be faster and more efficient this way, plus it makes me feel like less of a newb.
import React from 'react';
class NotANewb extends React.Component{
    render() {
        return <h1>Totally a Newb</h1>
    }
}export default NotANewb
// to note: the only required element between the class declaration and the return statement is the render function.
// the component will not work without it so make sure to include it in initial component creation. 
// also, dont forget .Component in the class declaration.

{2}
// Easy to forget but important. When declaring a handler function witin an event dont forget to use 'this.' like so:
return <button onClick={this.callback}></button>

{3}
// also remember, handler functions should be arrow functions because they are firing when the event occurs, not when
//the element containing the event is rendered. 