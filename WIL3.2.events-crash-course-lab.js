{1}
// Lots of missteps and syntax areas on this one. Event listeners are really tricky and I will 
// have to make an effort to practice them. These things are goint to steal a lot of time from me.

{2}
// onKeyPressCapture is useless, ignore it and just use onKeyPress.

{3}
// you dont need to send an event in the actual event object for the cllback funstion that you 
// are invoking to recieve said event. also, onKeyPress will automatically send the key that is
// pressed. Examples: 
<div>
onKeyPress={this.handleType} 
</div>
// this will send the event just fine, no other code needed
handleType = (e) => {
    if ((e.key) == "a" ) {resize('+')}
    else {
      if ((e.key) == "s"){ resize('-')}
    }
  }
  // this will be invoked by the earlier call, will recieve the event, and will store the letter
  // of the key pressed at the key of .key. 

{4}
// try to keep code orgaixed while you are writing it. the handleType method above gave me more trouble
// than it should have partially because i wrote it slopily. Remember, neat code is one of the things 
// that will get you hired.

{5}
// in handleMouseMove i had trouble getting it to work untill I looked at Clarions github. I had used 
// .screen on my statements to set my variables and they used .client. i have no idea why that worked
// and cant find an answer on the internet but it did work. 
handleMouseMove = (event) => {
    const X = (event.clientX)
    const Y = (event.clientY)
    drawChromeBoiAtCoords(X,Y)
  }

  {6}
  // dont forget that with If/else logic you put the condition in parenthesis and the result in 
  // curly braces.
  handleType = (e) => {
    if ((e.key) == "a") {resize('+')}
  else 
    if ((e.key) == "s") {resize('-')} 
  }