// event handler
handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleNewToy(this.state)
    this.setState({
      name:'',
      image:''
    })
  }


// mapping through a array: (also mapping through an array within an array)
const genTitle = ourMmovies => {
  return ourMovies.map(movie => <div>{movie.title} {movie.time} {movie.genres.map(genre => <li>{genre}</li>)}</div>)
  }