{1}
// A "pure" presentational component looks like this:
import React from 'react';

const SimplerComponent = props => <div onClick={props.handleClick()}>"I am just happy</div>

export default SimplerComponent
// I got tripped up because I forgot to import react and export the defaut. Otherwise, its nice and simple.
//  I really like importing the props using the aarow function, it makes it a lot cleraner. 

{2}
// Thats it. Nice and simple. 