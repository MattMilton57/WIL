{1}
// The first type of component and the most important one is the class component. It is defined by its 
// ability to hold state and use lifecycle methids (componentwillmount, etc...). Most components will
// be these. An example of setting up a new one with the bare minimum:
import React, {Component} from 'react'

class App extends Component {
    render() {
        return <div></div>
    }
}
export default App

{2}
// Next up are functional components. These can contain no state or lifecycle methods. 
// Setting one up is much simpler than setting up a class component:
import React from 'react'

const App = props => {
    return (
        <div>{props.greeting}</div>
    )
}

export default App
// Functional components take in props and return JSX. This more complicated version is used for rendering 
// a button with customized text and onclick functionality which are passed in as props.
import React from 'react'

const Button = ({handleClick, text}) => <button style="myButton" onClick={handleClick}>{text}</button>

export default Button

{3}
// A "Presntational Component" is only used to display content. ususlly there is no state, 
// there is  no or very little logic in them. they are often functional components. Here is the example in the 
// notes which is the component we made earlier for the button:
import React from 'react'
 
const Button = ({ handleClick, text })=> <button style="myButton" onClick={ handleClick }>{ text }</button>
 
export default Button

{4}
// A "Container Component" is used to contain elements imported into it by functional components. It 
// also contains the logic for that element of the page. Each element of the page should have a container 
// component, though they shouls be reusable if they are not page-specific (headers, footers, etc)
// this is the example in the readme:
import React, { Component } from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import DropMenu from './DropMenu'
import Search from './Search'
 
class NavigationContainer extends Component {
 
  state = {
    query: "",
    username: ""
  }

  // I am assuming that this is the space for the logic that would map through the imported props for the different 
  // buttons that the nav bar woould need for that page and dend them to the button component so that they 
  // could be rendered in the NavLinks element. The whole NavagtionContainer would then be imported into the 
  // page that the app is currently displaying. 
 
  render() {
    // <>...</> is a a React fragment - it does not render anything to the DOM, but can wrap multiple JSX elements
    return (
      <>
        <Logo />
        <NavLinks />
        <DropMenu username={ this.state.username }/>
        <Search query= {this.state.query } handleChange={ this.handleChange } handleSubmit={ this.handleSubmit }/>
      </>
    )
  }
 
//   handleSubmit = event => { ... }
//   handleChange = event => { ... }
}
export default NavigationContainer


