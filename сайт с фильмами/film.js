
import { loadVideoPlayersByMovieId, getMoviesByFirstLetters, fetchMovieAndVideoDataByName, fetchMovieAndVideoDataById } from "./api.js";
import { Store } from "./store.js";

const searchBtn = document.querySelector('.btn-search');
const searchInput = document.getElementById('search-input');
const movieCardContainer = document.querySelector('.wrapper');
const formSearch = document.querySelector('.form-search');
const dropdownContainer = document.getElementById('dropdown-container');


searchBtn.addEventListener('click', handleSearchMovieByName);
searchInput.addEventListener('input', handleShowAllMovies);
document.addEventListener('click', (event) => {
    if (formSearch.contains(event.target)) {
        return
    }

    Store.setIsLoadedListVisible(false);
    renderListOfMovies();
    searchInput.value = '';
})


function handleShowAllMovies(event) {
    event.preventDefault();
    Store.setIsLoadedListVisible(true);

    getMoviesByFirstLetters(searchInput.value)
        .then((responseData) => {
            if (responseData) {
                // console.log(responseData.docs);
                Store.setListOfMovies(responseData.docs);
            }
            renderListOfMovies();
        })
}


//поиск данных по фильму из выпадающего списка в поиске
function handleFindMovieIdAtDropdownList(event) {
    let parentNode = event.target.closest('.dropdown-movie-item');
    let parentNodeID = Number(parentNode.id);

    loadVideoPlayersByMovieId(parentNodeID)
        .then((responseVideoData) => {
            Store.updateMovieInfo(Store.getVideoPlayerByID(parentNodeID), responseVideoData);
            renderCardOfMovie();
        })
}


function handleSearchMovieByName(event) {
    event.preventDefault();

    if (!searchInput.value) {
        return;
    }

    fetchMovieAndVideoDataByName(searchInput.value)
        .then(([doc, responseVideoData]) => {
            Store.updateMovieInfo(doc, responseVideoData);
            renderCardOfMovie();
        })

    searchInput.value = '';
}


function handleFindMovieIdAtFavoriteList(event) {
    let parentNode = event.target.closest('.favorite-movie-item');

    fetchMovieAndVideoDataById(parentNode.id)
        .then(([responseData, responseVideoData]) => {
            Store.updateMovieInfo(responseData, responseVideoData);
            renderCardOfMovie();
        })
}


//выбор плеера из выпадающего списка и отрисовка
function handleSearchPlayerAtSelect(event) {
    Store.setSelectedVideoPlayer(event.target.value);
    renderCardOfMovie();
}


//клик, чтобы добавить в избранное
function handleClickFavorites() {
    Store.changeCurrentFavouriteMovie();
    renderCardOfMovie();
}


function showExistedInfo(data) {
    return Number(data) > 0 ? data.toFixed(1) : ``;
}


function showAge(data) {
    return Number(data) > 0 ? data.toFixed(0) : `0`;
}


function createList() {
    const list = Store.state.loadedList.map((movieEl) => {
        return `<div class="dropdown-movie-item" id = '${movieEl.id}'>${movieEl.name} 
                    <span class="dropdown-movie-rating">${showExistedInfo(movieEl.rating.kp)}</span>
                </div>`
    }).slice(0, 10);

    return list.join(' ');
}


//отрисовка выпадающего списка и слушатель на клик по одному из выпадающего списка фильму
function renderListOfMovies() {
    //рендерим список фильмов по введенным значениям
    dropdownContainer.innerHTML = Store.state.isloadedListVisible ? `<div class="dropdown-list-movies">
                                 ${createList()}
                                 </div>` : '';

    const dropdownListMovies = dropdownContainer.querySelector('.dropdown-list-movies');
    //слушатель, если клик по одному из фильмов
    if (dropdownListMovies) {
        dropdownListMovies.addEventListener('click', handleFindMovieIdAtDropdownList);
    }
}


function countHoursAndMinutes(minutes) {
    let hours = Math.floor(minutes / 60);
    return hours ? `${hours} ч ${minutes - (hours * 60)} мин` : ``;
}


function createGenresHTML() {
    const genresAll = Store.state.movie.genres.map((genre) => {
        return `<a href="#">${genre.name}</a>`;
    })

    return genresAll.join(',  ');
}


function createPlayerSelectField() {
    const playersAll = Store.state.movie.videoPlayers.map((players) => {
        return `<option id = "${players.source}"  ${players.source === Store.state.movie.selectedVideoPlayer ? 'selected' : ``} >${players.source}</option>`;
    })

    return `<select id = "select-player">${playersAll.join(' ')}</select>`
}


function renderCardOfMovie() {
    movieCardContainer.innerHTML = '';
    if (!Store.state.movie.idMovie) {
        return;
    }

    const movieCardHTML = `<div class="wrapper-col-1">
            <img src="${Store.state.movie.poster}" alt="${Store.state.movie.name} ${(Store.state.movie.year)}" >
        </div>
        <div class="wrapper-col-2">
        ${renderFavoritesBtn()}
        
            <h1 class="title">${Store.state.movie.name} (${Store.state.movie.year})</h1>
            <h6 class="subtitle">${Store.state.movie.alternativeName} ${showAge(Store.state.movie.ageRating)}+</h6>
            <p class="description">${Store.state.movie.shortDescription}</p>

            <div class="mb-40">
                <a href="#" class="btn" id = "watch-btn">Смотреть</a>
            </div>

            <ul class="params mb-40">
                <li><span class="text-muted">Формат </span> ${Store.state.movie.isSerial ? `Сериал` : `Фильм`}</li>
                <li><span class="text-muted">Аудиодорожки </span>Русский</li>
                <li><span class="text-muted">Возраст </span><span><span class="tag">${showAge(Store.state.movie.ageRating)}+</span></span></li>
            </ul>

            <h2>О фильме</h2>

            <ul class="params">
                <li><span class="text-muted">Год производства </span>${Store.state.movie.year}</li>
                <li><span class="text-muted">Страна </span>${Store.state.movie.countryName}</li>
                <li><span class="text-muted">Жанр </span>
                <span class="genres-list">${createGenresHTML()}</span>
                </li>
                <li><span class="text-muted">Длительность </span>
                    <time class="text-muted">${Store.state.movie.movieLength ? `${Store.state.movie.movieLength} мин. / ${countHoursAndMinutes(Store.state.movie.movieLength)}` : `${Store.state.movie.seriesLength}  мин.`}</time>
                </li>
                <li><span class="text-muted">Описание </span>${Store.state.movie.description}</li>
            </ul>

                <div class="kinobox_player">
                    ${createPlayerSelectField()}
                    <iframe controls id = "iframe-player" src="${Store.getIframeBySource()}" width="100%" height="500px" style = "border: 1px solid #aaa; border-radius: 3px;"></iframe>
                </div>
        </div>
             
        <div class="wrapper-col-3">
            <span class="rating-main">${(Store.state.movie.ratingKp).toFixed(1)}</span>
            <span class="rating-counts">${(Store.state.movie.votesKp).toLocaleString()} оценки</span>
            <a href="#" class="rating-details">${Store.state.movie.filmCritics} рецензий</a>

            <h4 class = "favorites-title"> Мое избранное </h4>   
                ${renderFavoriteMovieList()}
        </div>`

    movieCardContainer.insertAdjacentHTML('afterbegin', movieCardHTML);

    const selectPlayer = document.getElementById('select-player');
    const watchBtn = document.getElementById('watch-btn');
    const addToFavorites = document.getElementById('add-to-favorites');
    const favoritesList = document.getElementById('favorites-list');

    selectPlayer.addEventListener('change', handleSearchPlayerAtSelect);
    watchBtn.addEventListener('click', () => {
        document.getElementById('iframe-player').scrollIntoView({ behavior: "smooth", });
    });
    addToFavorites.addEventListener('click', handleClickFavorites);
    if (favoritesList) {
        favoritesList.addEventListener('click', handleFindMovieIdAtFavoriteList);
    }
}


//получить данные по изб фильмам и отрисовать 
function renderFavoriteMovieList() {
    const favoriteMovieList = Store.state.favoritesMovieList.map((favoriteEl) => {
        return `<div class = "favorite-movie-item" id = "${favoriteEl.id}">
                    <img id = "favorite-movie-poster" src = "${favoriteEl.poster}"> <div class="favorite-movie-name">${favoriteEl.name}
                    </div>
                </div>`;
    })
    return `<div id="favorites-list">${favoriteMovieList.join(' ')}</div>`
}


//отрисовка на закрашенное/незакрашенное сердечко
function renderFavoritesBtn() {
    return `<div id = "add-to-favorites"> 
                <span>Добавить в избранное</span> 
                <span id = "favorites-img">${Store.isFavoriteMovie() ? `<ion-icon name="heart"></ion-icon>` : `<ion-icon name="heart-outline"></ion-icon>`}</span>
             </div>`;
}


Store.initStateFromLocalStorage();
renderCardOfMovie();

