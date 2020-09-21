{1}
// componentDidMount gets called right after the render() method, that way the render mmethod takes care of filling 
// out the page with the skeleton of the app (formatting, css, etc) and then componentDidMount fetches and fills
// in the data. That way the user isnt stuck looking at a blank screen, especially if the fetch takes a while.
// This is especially true if you are fetching from an API. 

{2}
// shouldComponentUpdate is invoked between when something alters the state or props of a page and when the 
// page actually re-renders. It checks to see if the changes in the state or props will actually effect anything
// being displayed on the page and if not will prevent an unnecessary re-rendering thus improving performance.
