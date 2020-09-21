{1}
// in this lab we are using the "clientY" and "clientY" attributes of an event which five us the coordinates of the mouse when the event is fires.
class Clients extends React.Component{
    
    showCoords = (e) => {
        x = e.clientX
        y = e.clientY
        console.log(x,y)
    }
    
    render() {
        return (
            <div onclick={this.showCoords}>This is the on click</div>
        )
    }
}
// this will produce the x and y positions of the mouse. 

{2}
// This lab provided a much better explanation/demonstration of the use of events asynchronously. calling e.persist()
// within the handler function much in the same way you would call e.preventDefault() will make sure that the data from the event
// will stick around long enough that you can use it later instead of just long enough for you to use it instantaniously.

{3}
// Though im assuming its a basic function, this was my first time using setTimeout() in a lab. it was used this way:
handleClick = (e) => {
    e.persist()
    let vent = e
    let time = this.props.delay
    setTimeout(() => {
        this.props.onDelayedClick(vent)
      }, time);
}
// so it was used within the function to send the event (or an attribute of an event) to a callback function in 
// another component. the variable "time" was passed in from the parent component, but could have been hardcoded
// in microseconds

