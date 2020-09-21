// this readme went through the different lifecycle methods we can use in react and where they can all be called.
// it took pains to stress that render() is the only one that is necessary and that the oters should be used as
// sparingly as possible. Since this was just a vocab info dump, im going to summaraze each of them. 

{1}
static.getDerivedStateFromProps(props,state) 
// pretty sure there is no . between "staic" and the rest of this function, but i didnt want the error from the 
// space. in the readme it was "static getDerivedStateFromProps(props, state)" This method will trigger an update 
// of the component whenever its parent component re-renders, as it is assuming that the parent is passing down 
// new props. Sometimes though, the parent is re rendering for some other reason and is still passing down the 
// same props, which makes the re-renering unnecessary and slows down performance. React says there is usually
// a better way of going about this so, do that. 

{2}
shouldComponentUpdate(nextProps, nextState)
// this is a turbo for speed customization on your app that is loud and unnecessary. It returns a boolian that
// tells your app to update if a certain condition is met in your props. (re render if a certain score is reached
// or a character has moved a certain distance or something). Notreally necessary for small apps and there
// are alternatives for big ones.

{3}
render()
// king of kings. lord of lords. The Dale Earnhardt of react. Render is the required update method in react, it is
// what actually throws content into the dom and onto the screen. 

{4}
getSnapshotBeforeUpdate(prevProps, prevState)
// this fires in the time between when render paints the picture and when the picture goes up on the screen. this 
// sends quick chnging info (like mouse position) to the next method so that it can be used there.

{5}
componentDidUpdate(prevProps, prevState, snapshot)
// I dont get it. I guess it can be used for updating a third party library but i dont see why. Also, for adjusting
// scroll position, which seems like a much more important thing and something they should have spent more time on
// in this tutorial. ahhhh flatiron learning materials... 