{1}
// When working with a deeply nested object in state, make sure you use a new spread operator for every layer you go in.
setResolution = () => {
    this.setState({
        settings: {
            ...this.state.settings,
            video: {
                ...this.state.settings.video,
                resolution: '720p'
            }
        }
    })
}
// Same goes for when you are accessing that information, layers. 
<button onClick={this.setResolution} className='Resolution'>Resolution = {this.state.settings.video.resolution}</button>
