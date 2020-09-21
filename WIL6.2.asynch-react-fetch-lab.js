{1}
// really basic lab here as well. Always good to practice writing up a component though. It looked like this. 
import React from 'react';

class App extends React.Component {

    componentDidMount(){
        fetch ("http://api.open-notify.org/astros.json")
        .then (json => json.stringify)
    }

  render(){
    return(<li>a thing</li>)
  }

} export default App
// the end