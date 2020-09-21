  // Sequence for updating a form via state:
  // form:
  <input type="text" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
  // function:
  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  