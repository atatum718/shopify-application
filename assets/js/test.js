// window.onload = function () {
//     document.querySelector("#searchButton")
//     .addEventListener("click", searchODMB);
// function searchODMB() {
//     const BASE_URL = " http://www.omdbapi.com/?apikey=e5f280da&";
//     const searchMovieDatabase = document.querySelector("#searchMovie").value;
//     fetch(BASE_URL+ searchMovieDatabase)
//     .then((response)=> response.json())
//     .then((result) => getMovie(result));

    
// }
//     function getMovie(movies) {
//         let html = "";
//         html += "<ul>";
//         for (let i = 0; i < movies.length; i++) {
//             let movies = movies[i];
//             html += "<li>";
//             html += `<a target="_blank" href="${movies.Title}">`
//             html += `<img src=${movies.Poster} class="movie-poster">`;
//             html += `<p ${movies.Year}</p>`
//             html += `<p ${movies.Ratings}</p>`
//             html += "</li>"
//         }
//         html += "</ul>";

        
//             <div class= "card">
//                 <img class= "card-img" src"${movies.Poster}"/>;
//                 <div class= "card-info">
//                     <p class= "card-info-text" ${movies.Title}</p>
//                     <p class= "card-info-text" ${movies.Year}</p>
//                     <p class= "card-info-text" ${movies.Ratings}</p>

//             </div>;

//        document.querySelector("#resultsContainer").innerHTML = html;
                
//     }
// };