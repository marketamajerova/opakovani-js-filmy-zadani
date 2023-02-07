'use strict';

console.log('JavaScript ve stránce funguje');


fetch(
    'https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
    .then((resp) => resp.json())
    .then((data) => { 
        let movies = [];
        movies = data;
        movies.sort((a ,b) => {
            const nameA = a.title.toUpperCase(); // ignore upper and lowercase
            const nameB = b.title.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        });

        const movieList = document.querySelector('#movies');

        const showMovies = () => {
            movies.forEach((movie) => {

                const Movie = ({id, title, url, posterUrl, genres, year }) => {
                    return `
                        <div class="movie">
                            <img class="movie__img" src="${posterUrl}" alt="${title}">
                            <h2 class="movie__title"> <a href="${url}"> ${title} </a></h2>
                            <p class="movie__year">${year}</p>
                            <p class="movie__genre">${genres.join(', ')}</p>
                        </div>
                    `;
                };

            movieList.innerHTML = movies.map((item) => {
                return Movie(item)}
                )
            })
        }


        showMovies();
    });


// const Movie = {
        //     id: data.id,
        //     title: data.title,
        //     url: data.url,
        //     posterUrl: data.posterUrl,
        //     year: data.year
        // }
        // console.log(Movie);