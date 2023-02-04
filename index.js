'use strict';

console.log('JavaScript ve stránce funguje!');

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

const MovieList = (items) => {
    document.querySelector('#movies').innerHTML = items.map((item) => {
        return Movie(item);
    })
}

fetch(
    'https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
    .then((resp) => resp.json())
    .then((data) => MovieList(data));

