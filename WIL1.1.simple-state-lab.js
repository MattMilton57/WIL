
{1}
// it can be really frustrating to write default props but i was actually just missing a few steps. in the end I had to borrow 
//Clarions because it was just taking too long. the end result looked like this:

export default Matrix

Matrix.defaultProps = {
  values: [
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'], 
  ]
}

//note that the statement is located BENEATH the export default statement. I spent most of my time trying to set a prop as the default 
//prop and working a thousand ways to do that, it isnt possible. it makes sene as there can only be one default prop so it needs to be written out speciffically. 

{2}
// dont forget that props can be sent to other components within a return statement nested inside a function like this:
genRow = (vals) =>{ 
    return vals.map(val => <div className="cell"><Cell value={'#fff'}/></div>) 
  }
//I know that a lot of time was spent while building classEngage trying to figure out a way to do this within the render method but you 
// dont have to. the method that is sending this ccan be a callback function or called in componentDidMount

{3}
// This:
state={
    color:this.props.value
}
// holy shit, this is a thing. State can be set directly with a prop. Holy shit holy shit. 
// Im not sure why this amazes me so much but...yeah.

{4}
// Also this:
return(
    <div className="cell" style={{backgroundColor: this.state.color}} onClick={(e) => this.handleclick(e)} >
            hat
    </div>
)
// life lesson genious: dont spend 30 minutes trying to get a backgroundcolor style change directly into the onclick event 
// and then another 20 minutes trying to get it into the handleclick function when you can just set the initial 
// background color to state and change that instead. State is kind of a big deal, especially when changing anything, USE IT.

{5}
// READ THE GODDAMN README 5 TIMES.



