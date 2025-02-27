import { Store } from "../../store.js";

const Content = document.getElementById('wrapper');

function showAge(data) {
    return Number(data) > 0 ? data.toFixed(0) : `0`;
}

function showInfo(data) {
    return data ? data : ``;
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

export function renderMovieCard() {
    if (!Store.state.movie.idMovie) {
        return;
    }

    Content.innerHTML = `
    <div class = "wrapper-join-column">
        <div class = "wrapper-join-row">
            <div class="wrapper-col-1">
                <img src="${Store.state.movie.poster}" alt="${Store.state.movie.name} ${(Store.state.movie.year)}" >
            </div>
            <div class="wrapper-col-2">
                ${createFavoritesBtn()}
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
                    <span class="genres-list" id = "genres-list">${createGenresHTML()}</span>
                    </li>
                    <li><span class="text-muted">Длительность </span>
                        <time class="text-muted">${countHoursAndMinutes(Store.state.movie.movieLength, Store.state.movie.seriesLength)}</time>
                    </li>
                    <li><span class="text-muted">Описание </span>${Store.state.movie.description}</li>
               </ul>
            </div>
        </div>
        <div class="kinobox_player">
           
            ${Store.getIframeBySource() ? `  ${createPlayerSelectField()}   
                <iframe controls id = "iframe-player" src="${Store.getIframeBySource()}" width="100%" height="800px" style = "border: none; border-radius: 3px;"></iframe>
                ` : `<div class = "video-is-undefined">Видеоплеер отсутствует</div>`}
        </div>     
    </div>

        <div class="wrapper-col-3">
            <span class="rating-main">${(Store.state.movie.ratingKp).toFixed(1)}</span>
            <span class="rating-counts">${(Store.state.movie.votesKp).toLocaleString()} оценки</span>
            <a href="#" class="rating-details">${Store.state.movie.filmCritics} рецензий</a>

            <h4 class = "favorites-title"> Мое избранное </h4>   
                ${createFavoriteMovieList()}
        </div>`
}

function createGenresHTML() {
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

//получить данные по изб фильмам и отрисовать 
function createFavoriteMovieList() {
    const favoriteMovieList = Store.state.favoritesMovieList.map((favoriteEl) => {
        return `<div class = "favorite-movie-item" id = "${favoriteEl.id}">
                    <img id = "favorite-movie-poster" src = "${favoriteEl.poster}"> <div class="favorite-movie-name">${favoriteEl.name}
                    </div>
                </div>`;
    })
    return `<div id="favorites-list">${favoriteMovieList.join(' ')}</div>`
}

//отрисовка на закрашенное/незакрашенное сердечко
function createFavoritesBtn() {
    return `<div id = "add-to-favorites"> 
                <span>Добавить в избранное</span> 
                <span id = "favorites-img"><ion-icon name="${Store.isFavoriteMovie() ?  'heart' :  'heart-outline'}"></ion-icon></span>
             </div>`;
}

