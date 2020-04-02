let moviess = [
    {
      title: "The Man From Earth 1",
      description: `John üniversiteden ayrılıp, başka bir yere gitmeye karar vermiş, akademisyen arkadaşları da ona veda etmek için evine gelmişlerdir. Arkadaşları John'u kalması için ikna etmeye çalışırken, John büyük sırrını ortaya dökecek ve herkesi büyük bir şaşkınlığa sürükleyecekti`,
      poster:
        "https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth.jpg",
      isFavourite: true
    },
    {
      title: "The Man From Earth 2",
      description: `John üniversiteden ayrılıp, başka bir yere gitmeye karar vermiş, akademisyen arkadaşları da ona veda etmek için evine gelmişlerdir. Arkadaşları John'u kalması için ikna etmeye çalışırken, John büyük sırrını ortaya dökecek ve herkesi büyük bir şaşkınlığa sürükleyecekti`,
      poster:
        "https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth.jpg",
      isFavourite: false
    },
    {
      title: "The Man From Earth 3",
      description: `John üniversiteden ayrılıp, başka bir yere gitmeye karar vermiş, akademisyen arkadaşları da ona veda etmek için evine gelmişlerdir. Arkadaşları John'u kalması için ikna etmeye çalışırken, John büyük sırrını ortaya dökecek ve herkesi büyük bir şaşkınlığa sürükleyecekti`,
      poster:
        "https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth.jpg",
      isFavourite: true
    }
];

const search_text = document.querySelector(".search_text");

search_text.addEventListener("keydown", (event) => {
    if(event.keyCode == 13) {
        console.log(search_text.value);
        searchMovie();
    }
});

search_text.addEventListener("keyup", () => {
  if(search_text.value.length < 1) {
    document.querySelector("#movies").innerHTML = "";
  }
});

async function searchMovie() {
    const request = await fetch(`https://www.omdbapi.com/?apikey=831249ce&s=${search_text.value}`);
    const data = await request.json();
    if(data.Response == 'True') {
      let movies = data.Search.map(m => {
        return {
            title: m.Title,
            description: m.Year,
            imdbID: m.imdbID,
            poster: m.Poster == 'N/A' ? './assets/img/no_image.jpg' : m.Poster,
        }
      });
      prepareMovies(movies);
    } else {
      document.querySelector("#movies").innerHTML = "<h3>Sonuç Bulunamadı!</h3>";
    }
}


function prepareMovies(movies) {
    document.querySelector("#movies").innerHTML = "";
    movies.forEach(movie => {
        let movie_card = document.createElement("movie-card");
        movie_card.setAttribute("title", movie.title);
        movie_card.setAttribute("poster", movie.poster);
        movie_card.setAttribute("imdbID", movie.imdbID);
        movie_card.innerHTML = movie.description;
        document.querySelector("#movies").append(movie_card);
    })
    
}

//prepareMovies(movies);