{1}
// Important to remember what the point of the labs is. You are working on these to learn the skills they are trying o teach 
// and to practice those you have allready learned. It is nice to pass all of the tests, but you cant show all of your passing
// tests to a future employer and expect to get a job out of it. I spent far too much time today trying to understand unclear
// directions in the lab. That said, at the end I realized that the final directions were unclear and I wasnt passing
// 5 out of the 17 tests, but that I had learned what I needed to learn so it was ok that I moved on. Learn what you 
// need to learn and move on. 

{2}
// When stuck, re type everything in the section that is giving you a problem so that you can make sure you dont 
// have a typo. Probably lost an hour to this today. Common dev thing im sure but still...

{3}
// Conditional displaying of a JSX element is pretty cool. It looks like this:
<div>
<h1>Hello!</h1>
{unreadMessages.length > 0 &&
  <h2>
    You have {unreadMessages.length} unread messages.
  </h2>
}
</div>
// You put in some curly braces where you want your conditioned element to go, start with the logic, and then the 
// element you want to insert if the logic comes our true. If you want one of two options then you just put in 
// two statememnts that are opposing. This is mainly useful for components when you are maping through an array 
// and sending each item through it individually. Here was what it looked like in the lab. 
return(
<div className="extra content">
{ this.props.pet.isAdopted === true &&
  <button className="ui disabled button">Already adopted</button>
}
{ this.props.pet.isAdopted === false &&
<button className="ui primary button" onClick={() => this.clickHandler(this.props.pet.id)}>Adopt pet</button>
}
</div>)



