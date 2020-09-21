// Sent props to another component within a function
genRow = (vals) =>{ 
    return vals.map(val => <div className="cell"><Cell value={'#fff'}/></div>) 
  }

  // Use prev for setting state
  getNextSushi = () => {
    this.setState((prev) => {
      return {
        sushi: prev.sushi.slice(4),
        currentSushi: prev.sushi.slice(0, 4),
      };
    });
  };

  // Update an attribute of an object in state with the spread operator
this.setState({
  addressInfo: {
    ...this.state.addressInfo,
    city: 'New York City'
  }
});

 // use props to set initial state 
 class Propapp extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      color:props.initialColor
    }
  }
}   

