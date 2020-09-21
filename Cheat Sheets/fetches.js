    // basic GET fetch
    fetchSushi = () => {
        fetch(API)
          .then((res) => res.json())
          .then((allSushi) => {
            this.setState(
              {
                sushi: allSushi,
              },
              this.getNextSushi
            );
          });
      };

// POST fetch with re-render call at the end
handleNewToy = (e) => {
    fetch ('http://localhost:3000/toys', {
      method: 'POST',
      body: JSON.stringify({
        name:e.name,
        image:e.image,
        likes:e.likes
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    },)
    .then (res => this.fetchToys(res))
  }

// DELETE fetch
donateToy = (e) => {
    console.log(e)
    fetch('http://localhost:3000/toys/'+e, {
      method: 'DELETE'
    })
    .then (res => this.fetchToys(res))
  }

// PATCH fetch
likeToy = (e) => {
    console.log('http://localhost:3000/toys/'+e)
    fetch ('http://localhost:3000/toys/'+e[0], {
      method: 'PATCH',
      body: JSON.stringify({
        likes:e[1]+1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    },)
    .then (res => this.fetchToys(res))
  }