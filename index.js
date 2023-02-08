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
    items.sort((a,b) => {
        const nameA = a.title.toUpperCase(); // ignore upper and lowercase
        const nameB = b.title.toUpperCase(); // ignore upper and lowercase
        
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
    })

    document.querySelector('#movies').innerHTML = items.map((item) => {
        
        return Movie(item);
    })

    const buttonAsc = document.getElementById('a-z');

    // const sortAsc = () => {
    //     console.log('tlacitko funguje')
    //     items.sort((a,b) => {
    //         const nameA = a.year; 
    //         const nameB = b.year; 
            
    //         if (nameA < nameB) {
    //             return -1;
    //         }
    //         if (nameA > nameB) {
    //             return 1;
    //         }
    //     })
    // }

    buttonAsc.addEventListener('click', sortAsc);
}

fetch(
    'https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
    .then((resp) => resp.json())
    .then((data) => MovieList(data));


