import { loadVideoPlayersByMovieId, getMoviesByFirstLetters, fetchMovieAndVideoDataByName, fetchMovieAndVideoDataById, fetchMovie, fetchRandomMovies } from "./api.js";
import { EVERY_YEAR } from "./const.js";
import { Store } from "./store.js";
import { renderNavbar } from "./components/NavBar/navBar.js";
import { renderMovieCard } from "./components/MovieCard/movieCard.js";
import { renderFilmList } from "./components/MovieList/movieList.js";
import { renderDropdownMovieList } from "./components/DropdownMovieList/dropdownMovieList.js";


const searchBtn = document.getElementById('btn-search');
const searchInput = document.getElementById('search-input');
const formSearch = document.getElementById('form-search');
const navBrand = document.getElementById('nav-brand');

searchBtn.addEventListener('click', handleSearchMovieByName);
searchInput.addEventListener('input', handleShowDropdownMovieList);
document.addEventListener('click', handleClickOutsideSearchInput);
navBrand.addEventListener('click', handleShowRandomFilmList);

//убираем выпадающий список с предложениями фильмов
function handleClickOutsideSearchInput(event) {
    if (formSearch.contains(event.target)) {
        return  
    }

    Store.setIsLoadedListVisible(false);
    renderDropdownMovieList();
    initDropdownMovieListEvent();
    searchInput.value = '';
}

function handleYearsNavItemClick(event) {
    if (event.target.id === document.getElementById('year-search').id) {
        return
    }

    if (Store.state.sidebarFilter.year !== event.target.value) {
        Store.setSidebarFilter({year: event.target.value === 'Любой' ? EVERY_YEAR : event.target.value});
        render();
    }           

    fetchMovie(Store.state.sidebarFilter)
        .then((responseMoviesData) => {
            Store.setPageType('FilmList');
            Store.updateMoviesList(responseMoviesData.docs);
            render();
        });
}

function handleShowRandomFilmList() {
    fetchRandomMovies()
        .then((responseMoviesData) => {
            Store.setPageType('StartList');
            Store.updateMoviesList(responseMoviesData.docs);
            render();
        })
}

function handleTypesNavItemClick(event) {
    //проверка для клика по нужному элементу
    const navItemTypeId = event.target.id;
    if (navItemTypeId === document.getElementById('types-search').id) {
        return
    }
    if (Store.state.sidebarFilter.type !== navItemTypeId) {    
        Store.setSidebarFilter({type: navItemTypeId});
        render(); 
    }

    fetchMovie(Store.state.sidebarFilter)
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
    
    if (Store.state.sidebarFilter.genre !== event.target.textContent) {    
        Store.setSidebarFilter({genre: event.target.textContent});
        render(); 
    }

    fetchMovie(Store.state.sidebarFilter)
        .then((responseMoviesData) => {
            Store.setPageType('FilmList');
            Store.updateMoviesList(responseMoviesData.docs);
            render();
        })
}

function handleFindMovieFromFilmList(event) {
    let parentNode = event.target.closest('.film-list-element');
    console.log(event.target);
    onCardClick(parentNode.id);
}

function handleShowDropdownMovieList(event) {
    event.preventDefault();
    Store.setIsLoadedListVisible(true);

    getMoviesByFirstLetters(searchInput.value)
        .then((responseData) => {
            if (responseData) {
                Store.setListOfMovies(responseData.docs);
            }
            renderDropdownMovieList();
            initDropdownMovieListEvent();
        })
}

function initDropdownMovieListEvent() {
    const dropdownListMovies = document.getElementById('dropdown-list-movies');
    //слушатель, если клик по одному из фильмов
    if (dropdownListMovies) {
        dropdownListMovies.addEventListener('click', handleFindMovieIdAtDropdownList);
    }
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

function initNavbarEvents() {
    const genresSearchContainer = document.getElementById('genres-search');
    const typesSearchContainer = document.getElementById('types-search');
    const selectYear = document.getElementById('years-film-list');

    genresSearchContainer.addEventListener('click', handleGenresNavItemClick);
    typesSearchContainer.addEventListener('click', handleTypesNavItemClick);
    selectYear?.addEventListener('change', handleYearsNavItemClick);
}

function initFilmListEvents() {
    const filmListGroup = document.getElementById('film-list-group');

    filmListGroup.addEventListener('click', handleFindMovieFromFilmList);
}

function render() {
    renderNavbar();
    initNavbarEvents();
    if (Store.state.pageType === 'FilmCard') {
        renderMovieCard();
        initMovieCardEvents();
    } else {
        renderFilmList();
        initFilmListEvents();
    }
}

function initMovieCardEvents() {
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

Store.initStateFromLocalStorage();
render();

