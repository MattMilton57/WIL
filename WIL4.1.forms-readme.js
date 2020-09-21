{1}
// input elements implicitly have a value to them, so when they are the target of an event that value can be 
// called as an attribute in order to retrieve whatever is in the text box.
handleNameChange = (e) => {
    this.setState({
        lastName: e.target.value
    })
}

{2}
// onSubmit is placed in the initial form tag:
<form onSubmit={e => this.aSubmitFunction(e)}>
    form guts
</form>
// it is triggered either by a user pressing enteror by the click of a Submit button.

{3}
// giving inputs the same name as the state they are updating allows you to build an abstracted handleChange function
<input type="text" name="firstName" onChange={event => this.props.handleChange(event)} value={this.state.firstName}></input>
// is then sending its data to:
handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}
