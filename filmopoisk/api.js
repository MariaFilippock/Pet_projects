import { MOCK_DATA, MOCK_VIDEODATA_MAPPER } from "./mock.js";
import { EVERY_YEAR } from "./const.js";

export function loadVideoPlayersByMovieId(id) {
    const url = `https://kinobox.tv/api/players?kinopoisk=${id}`;

    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve(MOCK_VIDEODATA_MAPPER[id])
    //     }, 1500);
    // }).then((responseVideoData) => {
    //     return responseVideoData;
    // })
    //

    return fetch(url)
        .then((response) => {
            return response.json();
        }).then((responseVideoData) => {
            return responseVideoData;
        })
}

const headers = {
    // "X-API-KEY": "H1WGZ9Y-VT04R1D-KFYYYQ2-ZDB00S5"
    "X-API-KEY": "B8Y4Q8Y-SSG4FVM-QQ1WBYN-RTF0J37"
};

let counter = 0;

export function getMoviesByFirstLetters(name, page = 1, limit = 30) {
    counter++;
    const localCount = counter
    const url = `https://api.kinopoisk.dev/v1.4/movie/search?query=${name}&limit=${limit}&page=${page}`;

    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         if (counter === localCount) {
    //             resolve(MOCK_DATA)
    //         }
    //     }, 1500);
    // })
    //

    return fetch(url, {
        headers: headers
    }).then((data) => {
        if (counter === localCount) {
            return data.json();
        }
    })
}

export function fetchMovie(filters, page = 1, limit = 14) {
    const queryParams = {
        page: page,
        limit: limit,
        'genres.name' : filters.genre,
        type: filters.type,
        'rating.kp': '6-10',
    };
    if (filters.year !== EVERY_YEAR) {
          queryParams.year = Number(filters.year);
    }

    const notNullFields = ['votes.filmCritics', 'name', 'description', 'poster.url', 'alternativeName'];
    const searchParams = new URLSearchParams(queryParams);

    notNullFields.forEach((field) => {
        return searchParams.append('notNullFields', field);
    });

    const url = `https://api.kinopoisk.dev/v1.4/movie?` + searchParams.toString();

    return fetch(url, {
        headers: headers,
    }).then((response) => {
        return response.json();
    })
}

//получение списка топ-фильмов по клику на "фильмопоиск"
export function fetchRandomMovies(page = 1, limit = 14) {
    const url = `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=${limit}&notNullFields=votes.filmCritics&notNullFields=name&notNullFields=description&notNullFields=poster.url&notNullFields=top250&notNullFields=alternativeName&rating.kp=8-10&rating.imdb=8-10&votes.filmCritics=1-6666666`;

    return fetch(url, {
        headers: headers
    }).then((response) => {
        return response.json();
    })  
}


export function getMoviesByName(name, page = 1, limit = 1) {
    const url = `https://api.kinopoisk.dev/v1.4/movie/search?query=${name}&limit=${limit}&page=${page}`;

    return fetch(url, {
        headers: headers
    }).then((response) => {
        return response.json();
    })
}


function getMoviesById(id) {
    const url = `https://api.kinopoisk.dev/v1.4/movie/${id}`;

    return fetch(url, {
        headers: headers
    }).then((data) => {
        return data.json();
    })
}


export function fetchMovieAndVideoDataByName(movieName) {
    let responseData;

    return getMoviesByName(movieName)
        .then((_responseData) => {
            responseData = _responseData;
            return loadVideoPlayersByMovieId(_responseData.docs[0].id)
        })
        .then((responseVideoData) => {
            return [responseData.docs[0], responseVideoData];
        })
}

export function fetchMovieAndVideoDataById(movieId) {
    let responseData;

    return getMoviesById(movieId)
        .then((_responseData) => {
            responseData = _responseData;
            return loadVideoPlayersByMovieId(movieId)
        })
        .then((responseVideoData) => {
            return [responseData, responseVideoData];
        })
}

