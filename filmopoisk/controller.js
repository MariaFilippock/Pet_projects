import { loadVideoPlayersByMovieId, getMoviesByFirstLetters, fetchMovieAndVideoDataByName, fetchMovieAndVideoDataById, fetchMovie, fetchRandomMovies } from "./api.js";
import { EVERY_YEAR } from "./const.js";
import { Store } from "./store.js";
import { renderSideBar } from "./components/SideBar/sideBar.js";
import { renderMovieCard } from "./components/MovieCard/movieCard.js";
import { renderFilmList } from "./components/MovieList/movieList.js";
import { renderDropdownMovieList } from "./components/DropdownMovieList/dropdownMovieList.js";


const searchBtn = document.getElementById('btn-search');
const searchInput = document.getElementById('search-input');
const formSearch = document.getElementById('form-search');
const navBrand = document.getElementById('nav-brand');
const loader = document.getElementById('preloader-wrapper');

searchBtn.addEventListener('click', handleSearchMovieByName);
searchInput.addEventListener('input', handleShowDropdownMovieList);
document.addEventListener('click', handleClickOutsideSearchInput);
navBrand.addEventListener('click', handleShowRandomFilmList);

function renderLoader() {
    return Store.state.isLoading ?  loader.classList.remove('hidden') : loader.classList.add('hidden');

}

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

    if (Store.state.sideBarFilter.year !== event.target.value) {
        Store.setSideBarFilter({year: event.target.value === 'Любой' ? EVERY_YEAR : event.target.value});     
    }  

    Store.setIsLoading(true);
    render();         

    fetchMovie(Store.state.sideBarFilter)
        .then((responseMoviesData) => {
            Store.setPageType('FilmList');
            Store.updateMoviesList(responseMoviesData.docs);
            Store.setIsLoading(false);
            render();
        });
}

function handleShowRandomFilmList() {
    Store.setIsLoading(true);
    render();

    fetchRandomMovies()
        .then((responseMoviesData) => {
            Store.setPageType('StartList');
            Store.updateMoviesList(responseMoviesData.docs);
            Store.setIsLoading(false);
            render();
        })
}

function handleTypesNavItemClick(event) {
    //проверка для клика по нужному элементу
    const navItemTypeId = event.target.id;
    if (navItemTypeId === document.getElementById('types-search').id) {
        return
    }
    if (Store.state.sideBarFilter.type !== navItemTypeId) {    
        Store.setSideBarFilter({type: navItemTypeId}); 
    }

    Store.setIsLoading(true);
    render();

    fetchMovie(Store.state.sideBarFilter)
        .then((responseMoviesData) => {
            Store.setPageType('FilmList');
            Store.updateMoviesList(responseMoviesData.docs);
            Store.setIsLoading(false);
            render();
    })
}

function handleGenresNavItemClick(event) { 
    //проверка для клика по нужному элементу
    const genresSearchContainerId = document.getElementById('genres-search')?.id;
    if (event.target.id === genresSearchContainerId) {
        return
    }
    
    if (Store.state.sideBarFilter.genre !== event.target.textContent) {    
        Store.setSideBarFilter({genre: event.target.textContent});
    }

    Store.setIsLoading(true);
    render(); 

    fetchMovie(Store.state.sideBarFilter)
        .then((responseMoviesData) => {
            Store.setPageType('FilmList');
            Store.updateMoviesList(responseMoviesData.docs);
            Store.setIsLoading(false);
            render();
        })
}

function handleFindMovieFromFilmList(event) {
    let parentNode = event.target.closest('.film-list-element');
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
    Store.setIsLoading(true);
    render();

    let parentNode = event.target.closest('.dropdown-movie-item');
    let parentNodeID = Number(parentNode.id);

    loadVideoPlayersByMovieId(parentNodeID)
        .then((responseVideoData) => {
            Store.updateMovieInfo(Store.getVideoPlayerByID(parentNodeID), responseVideoData);
            //сеттер, где определяем тип страницы для отрисовки
            Store.setPageType('FilmCard');
            Store.setIsLoading(false);
            render();
        })
}

function handleSearchMovieByName(event) {
    event.preventDefault();

    if (!searchInput.value) {
        return;
    }

    Store.setIsLoading(true);
    render();

    fetchMovieAndVideoDataByName(searchInput.value)
        .then(([doc, responseVideoData]) => {
            Store.updateMovieInfo(doc, responseVideoData);
            Store.setPageType('FilmCard');
            Store.setIsLoading(false);
            render();
        })

    searchInput.value = '';
}

function handleFindMovieIdAtFavoriteList(event) {
    let parentNode = event.target.closest('.favorite-movie-item');

    onCardClick(parentNode.id);
}

function onCardClick(movieId) {
    Store.setIsLoading(true);
    render();

    fetchMovieAndVideoDataById(movieId)
        .then(([responseData, responseVideoData]) => {
            Store.updateMovieInfo(responseData, responseVideoData);
            Store.setPageType('FilmCard');
            Store.setIsLoading(false);
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

function initSideBarEvents() {
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
    renderLoader();
    renderSideBar();
    initSideBarEvents();
    if (Store.state.pageType === 'FilmCard') {
        renderMovieCard();
        initMovieCardEvents();
    } else {
        // renderPagination();
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


export function startApp() {
    Store.initStateFromLocalStorage();
    Store.setIsLoading(false);
    render();
}