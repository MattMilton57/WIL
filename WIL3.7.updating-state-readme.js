{1}
// This lesson explained the spread operator (...) better than anything i have encountered. The initial object in state looked like this:
class Example extends Component {
    constructor() {
        super();
        this.state = {
            theme: 'blue',
            addressInfo: {
                street: null,
                number: null,
                city: null,
                country: null
            }
        };
    }
}

  //The example setstate looked like this:

this.setState({
    addressInfo: {
      ...this.state.addressInfo,
      city: 'New York City'
    }
  });
  // in this example what the spread operator is doing is basically deconstructing the object (addressInfo) that is contained within state 
  // so that all of its 'layers' are equal to each other. It then updates ONLY the "city" attribute (if just passing in an object of the whole
  // addressInfo object with just the city attribute filled out and the others blank, it would overwrite the existing attributes, this prevents
  //that from happening). Another perk is that while the spread operator is trying to update the city attribute, if it doesnt find that
  // attribute within the object it will create it and set its state to the desired value. 

{2}
// Setting state is not synchronous, there is a tiny delay when doing it. I found this to be interesting:
handleClick = () => {
    this.setState({
        hasBeenClicked: true
    })
    console.log(this.state.hasBeenClicked)
}
// the console.log here actually produces false, the previous state, we havnt given the server enough time to actually update the state yet

{3}
// the solution to the above problem was interesting. Here it is: 
handleClick2 = () => {
    this.setState({
      hasBeenClicked: true
    }, () => console.log(this.state.hasBeenClicked)) // prints true
  }
// the thing that interested me here was using console.log as a callback function within the setState(). (or at least within the parenthesis,
// not the curly brackets). Good to note that the callback function here has to be an aarow function, its no longer asynchronous if it isnt. 

{4}
// This readme provided an excellent explanation on how to use the Previous state (or "prev") function. This example anabled the ability to 
// add a number to a counter every time an onClick event fired.
handleClick = () => {
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      }
    })
  }
// For another example, here is how John used it in the sushi saga lab
getNextSushi = () => {
    this.setState((prev) => {
      return {
        sushi: prev.sushi.slice(4),
        currentSushi: prev.sushi.slice(0, 4),
      };
    });
  };
// this operated on the full list of sushi which has been sent into state in the initial fetch, setting it to its previous state minus the 
// first four sushis in it while simultaniously setting the first four entries that were 'previously' in the sushi state and setting those
// as the new state of the currentSushi attribute. I like this, it means you an operate on the current state without having to use a variable
// and make a copy of it first. 
