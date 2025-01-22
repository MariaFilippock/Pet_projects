import { Store } from "../../store.js";
import { VISIBLE_PAGINATION, MAX_PAGES_COUNT, CORNER_PAGE_COUNT } from "../../const.js";

const Content = document.getElementById('wrapper');

export function renderFilmList() {
    const isMainScreen = Store.state.pageType === 'StartList';
    Content.innerHTML = `
            <div>
                <div>${isMainScreen ? '<span class="reccomend-message">Рекомендуем присмотреться к фильмам из подборки ТОП-250:</span>' : ''}</div>

                <div id="film-list-group" class="film-list-group">${createFilmList()}</div>

                <div id="page-container">
                    <span id='previous-page' class='next'> <ion-icon name="chevron-back-outline"></ion-icon> </span>
                    ${createPagination()}
                    <span id='next-page' class='next'> <ion-icon name="chevron-forward-outline"></ion-icon> </span>
                </div>
            </div>`;
}


function createFilmList() {
    return Store.state.moviesList?.map((listItem) => {
        return `<div id = '${listItem.id}' class = "film-list-element ">
            <img src = '${listItem.poster?.url}' alt = "${listItem.name}" />
            <span>${listItem.name}</span>       
        </div>`
    }).join(' ');

}

function calculatePagination() {
    let pagination = [];
    if (Store.state.pagination.pages < MAX_PAGES_COUNT) {
        pagination = [...Array(Store.state.pagination.pages).keys()].map(i=>i+1);
    } else if (Store.state.pagination.chosenPage <= CORNER_PAGE_COUNT) {
        pagination = [...Array(CORNER_PAGE_COUNT+1).keys()].map(i=>i+1);
        pagination.push('...', Store.state.pagination.pages);
    } else if (Store.state.pagination.pages-Store.state.pagination.chosenPage < CORNER_PAGE_COUNT) {
        pagination = [1, '...', Store.state.pagination.pages-4, Store.state.pagination.pages-3, Store.state.pagination.pages-2, Store.state.pagination.pages-1, Store.state.pagination.pages];
    } else {
        pagination = [1, '...', Store.state.pagination.chosenPage-1, Store.state.pagination.chosenPage, Store.state.pagination.chosenPage+1, '...', Store.state.pagination.pages];
    }
    return pagination;
}


function createPagination() {
    const pageArray = calculatePagination();
    // debugger
    const allPages =  pageArray.map((pageEl) => { 
        return `<span id='${pageEl}' class='page ${Store.state.pagination.chosenPage === pageEl ? 'active' : ''}'>${pageEl}</span>`
    });

    return allPages.join('')
        
}
