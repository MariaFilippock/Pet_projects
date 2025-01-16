import { Store } from "../../store.js";

const Content = document.getElementById('wrapper');

export function renderFilmList() {
    const isMainScreen = Store.state.pageType === 'StartList';
    Content.innerHTML = `
            <div>
                <div>${isMainScreen ? '<span class="reccomend-message">Рекомендуем присмотреться к фильмам из подборки ТОП-250:</span>' : ''}</div>
                <div id="film-list-group" class="film-list-group">${createFilmList()}</div>
            </div>`;
}


function createFilmList() {
    return Store.state.moviesList.map((listItem) => {
        return `<div id = '${listItem.id}' class = "film-list-element ">
            <img src = '${listItem.poster?.url}' alt = "${listItem.name}" />
            <span>${listItem.name}</span>       
        </div>`
    }).join(' ');

}
