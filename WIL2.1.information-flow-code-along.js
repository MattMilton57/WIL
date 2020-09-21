{1}
// You can use a function to set state like this:

    this.state = {
      color: getRandomColor(),
      childrenColor: '#FFF'
    }

  // as long as the function returns something. You can even have that function be its own method:

  export function getRandomColor() {
    // this function generates a random hex color from the letters below
    const letters = '123456789AB' // <-- cutting off top end so we can lighten the color twice with 'reduceColor'
    let color = '#'
    for (let i = 0; i < 3; i++) {
      color += letters[Math.floor(Math.random() * 11)]
    }
    return color
  }

  //also, a really good example of the use of the math.floor function here. Exactly what i need for generating the 
  //numbers for the random students in Class Engage

  {2}
  // i know this but i tend to forget it. The parenthesis in an arrow function is for passing in a variable, not ust an "e" for events.
  changeColor = (newChildColor) => {
    this.setState({
      color:getRandomColor(),
      childrenColor: newChildColor
    })
  }
  // and dont forget, the variable names in this case dont need to be consistent from child to parent. Here it has actually 
  //called a function in the child and the return of that function is whats represented by the variable. 

  {3}
  //if sending a variable back to a parent in a child component, you must use an arrow function in the onClick:
  <div>onClick={() => this.props.handleColorChange(getRandomColor())}</div>

  {4}
  //inline styling for a div in react looks like this:
  <div>
    <div>style={{backgroundColor: this.props.color}}</div>
    <div>style={{backgroundColor:'#FFF'}}</div>
  </div>
