// Great lab, frustrated that I couldnt finish it because I hit the NYT rate limit for calls on their API. Really 
// happy that this was one of the first "difficult" labs where I felt like I was competent enough to not hit any 
// snags that I couldnt handle. My cheat sheet was helpful, as was all of these What I Learned notes. 
// I would really like to come back to this later to finish it, as there was what looked like a pretty 
// challenging task to build a function that facillitated the use of a search from an input. For now Ill 
// mark it as done though. 

{1}
// Its really iportant to look at the data coming from the initial call to an API before you throw it into state.
// I ran into the "yourData.map is not a function" error again fr the thousandth time and had the good sense to 
// go check the data i was getting in my props and realized that I was sending one object with an array inside 
// of it which had individual objects inside of it. .map cant map over a single array inside of an object, so I 
// needed my fetch to only grab the review objects and throw them into the array in state so that they could
// be mapped over. I did this by altering my fetch/setState function:
class AClass extends React{
    fetchMovies(){
        fetch (URL)
        .then ((res) => res.json())
        .then ((res) => {
            this.setState({
                reviews:res.results
            })
        })
    }
}
// with res.results being the actual data within the return from the api call that I was looking for, namely
// the individual movie review objects. A good lesson that i am happy to have finally learned. 

{2}
// It really is easier when constructing a form to throw the input into state, display the state in the 
// text entry box, and then use state for the submit. Do that. A look at how this works. 
class AClass extends React{
    handleChange = (e) => {
        this.setState({
            searchTerm:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const reviewList=this.state.reviews
        console.log(reviewList)
    }

    render(){
        return(
            <div className='searchable-movie-reviews'>
                <form className='findMovie' onSubmit={e => this.handleSubmit(e)}>
                    <input onChange={e => this.handleChange(e)}>
                    </input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}