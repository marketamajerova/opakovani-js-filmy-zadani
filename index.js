'use strict';

fetch(
    'https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
    .then((resp) => resp.json())
    .then((data) => { 
        let movies = [];
        movies = data;
        movies.sort((a ,b) => {
            const nameA = a.title.toUpperCase(); 
            const nameB = b.title.toUpperCase(); 
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

        const buttonAsc = document.getElementById('a-z');
        const buttonDesc = document.getElementById('z-a');

        //funkce na serazeni filmu podle roku vydani vzestupne
        const sortAsc = () => {

            data.sort((a,b) => {
                const nameA = a.year; 
                const nameB = b.year; 

                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            })
            showMovies();
        }
        
        //funkce na serazeni filmu podle roku vydani sestupne
        const sortDesc = () => {

            data.sort((a,b) => {
                const nameA = a.year; 
                const nameB = b.year; 

                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }
            })
            showMovies();
        }


    buttonAsc.addEventListener('click', sortAsc);
    buttonDesc.addEventListener('click', sortDesc);

    });
