{1}
// I like this way of coding out my inputs:
<div>
<label>
  Username
  <input 
    id="username" 
    name="username" 
    type="text"
    value={this.state.username}
    onChange={e => this.changeHandler(e)} />
</label>
</div>
// its much easier to read. 

{2}
//I'm still having a lot of problems with remembering the syntax out for basic if/and logic. 
submitHandler = (e) => {
    e.preventDefault()
        if (this.state.anumber == 57 && this.props.alsoanumber > 5678)
            {console.log("i am being console logged")}
}
// so:
functionName = () => {
    if (conditional)
        {console.log("do this thing")}
}