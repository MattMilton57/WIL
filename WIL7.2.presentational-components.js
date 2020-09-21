{1}
// An example of a class component presentational component:
const defaultLimit = 100
 
class TextField extends Component {
  render() {
    return (
      <input
        className="field field-light"
        onChange={this.props.onChange}
        maxLength={this.props.limit || defaultLimit}
      />
    );
  }
}
// this does several things. 
// 1: It establishes the CSS class, which you could instead define as a prop so that you could change the 
// class and therefore the styling with every instance of a textfield.
// 2: The OncChange allows us to import the exact API (through a function) that we want to send the input to.
// 3: Give us an established character limit (which could be changed with a prop as well)

{2}
// an example of a functional presentational component:
const defaultLimit = 100
 
const TextField = (props) =>
  <input
    className="field field-light"
    onChange={props.onChange}
    limit={props.limit || defaultLimit}
  />;
// I like this one more. 