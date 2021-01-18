$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        e.preventDefault();
        let searchText = $('#searchText').val();
        getMovies(searchText)
    });
});

function getMovies(searchText){
   axios.get('http://www.omdbapi.com/?s='+ searchText+ '&apikey=e5f280da&' )
   .then((response) =>{
    console.log(response)
    let movies = response.data.Search;
    let output = '';
    $.each(movies, (index, movie) => {
        output +=`
        <div class "col-md-3:>
            <div class= "well text-center">
                <img src="${movie.Poster}">
                <h5>${movie.Title}</h5>
                <button onclick="nominated('${movie.imdbID}')" class="btn btn-primary" type="button">Nominate Movie</button>
            </div>
        </div>
        `
    });
    $('#movies').html(output)
   })
   .catch((err) => {

       console.log(err);
   });
}

function nominated(id){
    sessionStorage.setItem('movieID', id);
    window.location = 'movie.html';
    return false;
}

// This is the array that will hold the nominated films
let nominations = [];

// this function will create a new movie item based on the text that was entered into the search box, and push it into the nominated movies array

function addMovie(text) {
    const movie = {
        movieName,
        checked: false,
        id: Date.now(),
    };
    nominations.push(movie);
    console.log(nominations)
}

const movieName = input.value();
if (movieName !== '') {
    addMovie(movieName);
    input.value = '';
    input.focus();
}