
import { loadVideoPlayersByMovieId, getMoviesByFirstLetters, fetchMovieAndVideoDataByName, fetchMovieAndVideoDataById, fetchMovie } from "./api.js";
import { Store } from "./store.js";

const searchBtn = document.getElementById('btn-search');
const searchInput = document.getElementById('search-input');
const movieCardContainer = document.getElementById('wrapper');
const formSearch = document.getElementById('form-search');
const dropdownContainer = document.getElementById('dropdown-container');
const navBrand = document.getElementById('nav-brand');
const wrapperSidebar = document.getElementById('wrapper-sidebar');

searchBtn.addEventListener('click', handleSearchMovieByName);
searchInput.addEventListener('input', handleShowAllMovies);
document.addEventListener('click', (event) => {
    if (formSearch.contains(event.target)) {
        return
    }

    Store.setIsLoadedListVisible(false);
    renderListOfMovies();
    searchInput.value = '';
});

// navBrand.addEventListener('click', handleShowRandomFilmList);
//
// function handleShowRandomFilmList() {
//     fetchRandomMovies()
//         .then((responseMoviesData) => {
//             Store.setSelectedMenuItem(navBrand.id);
//             Store.setPageType('FilmList');
//             Store.updateMoviesList(responseMoviesData.docs);
//             render();
//         })
// }
//

function renderNavbar() {
    wrapperSidebar.innerHTML = `
            <div id="types-search" class="types-search">
            ${createFilmTypesSideBar()}
            </div>

            <div id="genres-search" class="genres-search">
                ${createGenresSidebar()}
            </div>

            <div id="year-search" class="year-search">
                ${createYearsSidebar()}
            </div>`;

    const genresSearchContainer = document.getElementById('genres-search');
    const typesSearchContainer = document.getElementById('types-search');
    const selectYear = document.getElementById('years-film-list');

    genresSearchContainer.addEventListener('click', handleGenresNavItemClick);
    typesSearchContainer.addEventListener('click', handleTypesNavItemClick);
    selectYear?.addEventListener('change', handleTypesNavItemClick);
}

function handleTypesNavItemClick(event) {
    if (event.target.id === document.getElementById('year-search').id) {
        return
    }
    
    if (Store.sidebarFilter.year !== event.target.id) {
        Store.setSidebarFilter({year: Number(event.target.value)});
        renderNavbar();
    }   

    fetchMovie(Store.sidebarFilter)
        .then((responseMoviesData) => {
            Store.setPageType('FilmList');
            Store.updateMoviesList(responseMoviesData.docs);
            render();
        });
}

function handleTypesNavItemClick(event) {
    //проверка для клика по нужному элементу
    const navItemTypeId = event.target.id;
    if (navItemTypeId === document.getElementById('types-search').id) {
        return
    }
    if (Store.sidebarFilter.type !== navItemTypeId) {    
        Store.setSidebarFilter({type: navItemTypeId});
        renderNavbar(); 
    }

    fetchMovie(Store.sidebarFilter)
        .then((responseMoviesData) => {
            Store.setPageType('FilmList');
            Store.updateMoviesList(responseMoviesData.docs);
            render();
    })
}

function handleGenresNavItemClick(event) { 
    //проверка для клика по нужному элементу
    const genresSearchContainerId = document.getElementById('genres-search')?.id;
    if (event.target.id === genresSearchContainerId) {
        return
    }

    if (Store.sidebarFilter.genre !== event.target.innerHTML) {    
        Store.setSidebarFilter({genre: event.target.innerHTML});
        renderNavbar(); 
    }

    fetchMovie(Store.sidebarFilter)
        .then((responseMoviesData) => {
            Store.setPageType('FilmList');
            Store.updateMoviesList(responseMoviesData.docs);
            render();
        })
}

function renderFilmList() {
    movieCardContainer.innerHTML = `<div id = "film-list-group">${createFilmList()}</div>`;

    const filmListGroup = document.getElementById('film-list-group');

    filmListGroup.addEventListener('click', handleFindMovieFromFilmList);
}

function handleFindMovieFromFilmList(event) {
    let parentNode = event.target.closest('.film-list-element');

    onCardClick(parentNode.id);
}

function createFilmList() {
    return Store.state.moviesList.map((listItem) => {
        return `<div id = '${listItem.id}' class = "film-list-element">
            <img src = '${listItem.poster?.url}' alt = "${listItem.name}" />
            <span>${listItem.name}</span>       
        </div>`
    }).join(' ');

}

function createFilmTypesSideBar() {
    return Store.FILM_TYPES.map((typeObj) => {
        const isChosen = Store.sidebarFilter.type === typeObj.id && Store.state.pageType === 'FilmList';

        return `<div id="${typeObj.id}" class="${isChosen ? 'chosen' : ''}"><span><ion-icon name="${typeObj.icon}"></ion-icon></span>    ${typeObj.text}</div>`;
    }).join('');
}

function createGenresSidebar() {
    let genresArray = Object.keys(Store.GENRES_MAP);
   
    return genresArray.map((genre) => {   
        const isChosen = Store.sidebarFilter.genre === Store.GENRES_MAP[genre] && Store.state.pageType === 'FilmList';

        return `<span id='${genre}' class='${ isChosen ? 'chosen' : ''}'>${Store.GENRES_MAP[genre]}</span>`;
    }).join('');
}

function createYearsSidebar() {
    const yearsAll = Store.years.map((yearData) => {
        return `<option id='${yearData}' ${yearData === Store.sidebarFilter.year ? 'selected' : ``}>${yearData}</option>`;
    });
    return `<select id="years-film-list">
            <option id='every-year'>Любой</option>
            ${yearsAll.join(' ')}
            </select>`;
}

function render() {
    renderNavbar();
    if (Store.state.pageType === 'FilmCard') {
        renderMovieCard();
    } else {
        Store.state.pageType = 'FilmList';
        renderFilmList();
    }
}

function handleShowAllMovies(event) {
    event.preventDefault();
    Store.setIsLoadedListVisible(true);

    getMoviesByFirstLetters(searchInput.value)
        .then((responseData) => {
            if (responseData) {
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
            //сеттер, где определяем тип страницы для отрисовки
            Store.setPageType('FilmCard');
            render();
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
            Store.setPageType('FilmCard');
            render();
        })

    searchInput.value = '';
}

function handleFindMovieIdAtFavoriteList(event) {
    let parentNode = event.target.closest('.favorite-movie-item');

    onCardClick(parentNode.id);
}

function onCardClick(movieId) {
    fetchMovieAndVideoDataById(movieId)
        .then(([responseData, responseVideoData]) => {
            Store.updateMovieInfo(responseData, responseVideoData);
            Store.setPageType('FilmCard');
            render();
        })
}

//выбор плеера из выпадающего списка и отрисовка
function handleSearchPlayerAtSelect(event) {
    Store.setSelectedVideoPlayer(event.target.value);
    Store.setPageType('FilmCard');
    render();
}

//клик, чтобы добавить в избранное
function handleClickFavorites() {
    Store.changeCurrentFavouriteMovie();
    Store.setPageType('FilmCard');
    render();
}

function showExistedInfo(data) {
    return Number(data) > 0 ? data.toFixed(1) : ``;
}

function showAge(data) {
    return Number(data) > 0 ? data.toFixed(0) : `0`;
}

function showInfo(data) {
    return data ? data : ``;
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

function countHoursAndMinutes(minutes, tvMinutes) {
    let hours = Math.floor(minutes / 60);
    let time = `${hours} ч ${minutes - (hours * 60)} мин`;

    if (minutes && hours >= 1) {
        return `${minutes} мин. / ${time}`
    } else if (minutes && hours < 1) {
        return `${minutes} мин.`;
    } else if (tvMinutes) {
        return `${tvMinutes} мин.`;
    } else {
        return `0 мин.`;
    }
}

function renderGenresHTML() {
    const genresAll = Store.state.movie.genres.map((genre) => {
        return `<a href="#" id = "${genre.name}">${genre.name}</a>`;
    })
    return genresAll.join(',  ');

}

function createPlayerSelectField() {
    const playersAll = Store.state.movie.videoPlayers.map((players) => {
        return `<option id = "${players.source}"  ${players.source === Store.state.movie.selectedVideoPlayer ? 'selected' : ``} >${players.source}</option>`;
    })

    return `<select id = "select-player">${playersAll.join(' ')}</select>`
}

function renderMovieCard() {
    movieCardContainer.innerHTML = '';
    if (!Store.state.movie.idMovie) {
        return;
    }

    const movieCardHTML = `
    <div class = "wrapper-join-column">
        <div class = "wrapper-join-row">
            <div class="wrapper-col-1">
                <img src="${Store.state.movie.poster}" alt="${Store.state.movie.name} ${(Store.state.movie.year)}" >
            </div>
            <div class="wrapper-col-2">
                ${renderFavoritesBtn()}
                <h1 class="title">${Store.state.movie.name} (${Store.state.movie.year})</h1>
                <h6 class="subtitle">${showInfo(Store.state.movie.alternativeName)} ${showAge(Store.state.movie.ageRating)}+</h6>
                <p class="description">${showInfo(Store.state.movie.shortDescription)}</p>

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
                    <span class="genres-list" id = "genres-list">${renderGenresHTML()}</span>
                    </li>
                    <li><span class="text-muted">Длительность </span>
                        <time class="text-muted">${countHoursAndMinutes(Store.state.movie.movieLength, Store.state.movie.seriesLength)}</time>
                    </li>
                    <li><span class="text-muted">Описание </span>${Store.state.movie.description}</li>
               </ul>
            </div>
        </div>
        <div class="kinx    ox_player">
           
            ${Store.getIframeBySource() ? `  ${createPlayerSelectField()}   
                <iframe controls id = "iframe-player" src="${Store.getIframeBySource()}" width="100%" height="800px" style = "border: 1px solid #aaa; border-radius: 3px;"></iframe>
                ` : `<div class = "video-is-undefined">Видеоплеер отсутствует</div>`}
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
    const genresList = document.getElementById('genres-list');

    selectPlayer?.addEventListener('change', handleSearchPlayerAtSelect);
    watchBtn.addEventListener('click', () => {
        document.getElementById('iframe-player').scrollIntoView({ behavior: "smooth", });
    });
    addToFavorites.addEventListener('click', handleClickFavorites);
    favoritesList?.addEventListener('click', handleFindMovieIdAtFavoriteList);
    genresList?.addEventListener('click', handleGenresNavItemClick);
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
                <span id = "favorites-img"><ion-icon name="${Store.isFavoriteMovie() ?  'heart' :  'heart-outline'}"></ion-icon></span>
             </div>`;
}

Store.initStateFromLocalStorage();
render();

