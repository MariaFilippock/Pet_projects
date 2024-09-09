const TaskInputForm = document.querySelector('#form');
const TaskInput = document.querySelector('.createTask_input');
const ButtonCreateTask = document.querySelector('.createTask_btn');
const taskList = document.querySelector('#taskList');


TaskInputForm.addEventListener('submit', handleAddTasks);
ButtonCreateTask.addEventListener('click', handleAddTasks);
taskList.addEventListener('click', deleteTask);
taskList.addEventListener('click', doneTask);
taskList.addEventListener('click', addToFavorites);

function render() {
    renderTasks();
    renderPagination();
    renderFilters();
}

function handleFavoritesFilterClick() {
    state.filter = 'favorites';
    state.currentPage = 1;
    saveToLocalStorage();
    render();

}

function handleAllTasksFilterClick() {
    state.filter = 'all';
    state.currentPage = 1;
    saveToLocalStorage();
    render();

}

function handleDoneFilterClick() {
    state.filter = 'completed';
    state.currentPage = 1;
    saveToLocalStorage();
    render();

}

const rowsPerPage = 5;

let state = {
    tasks: [],
    currentPage: 1,
    filter: 'all'
}


if (localStorage.getItem('state')) {
    state = JSON.parse(localStorage.getItem('state'));
    render();

}

function handleAddTasks(event) {
    event.preventDefault();

    const inputText = TaskInput.value;

    const newTask = {
        task: inputText,
        done: false,
        favorites: false,
        id: Date.now()
    }

    if (!newTask.task) {
        return
    } else {
        state.tasks.push(newTask);
    }

    renderTasks();
    renderPagination();

    saveToLocalStorage();

    TaskInput.value = '';

}

function deleteTask(event) {
    if (event.target.dataset.action !== 'delete') return;

    let parentNode = event.target.closest('.list_item');

    let id = Number(parentNode.id);

    state.tasks = state.tasks.filter((el) => el.id !== id);

    saveToLocalStorage();

    parentNode.remove();

    changeStatus();

    renderPagination();

}


function doneTask(event) {
    if (event.target.dataset.action !== 'done') return;

    let parentNode = event.target.closest('.list_item');

    let id = Number(parentNode.id);

    const task = state.tasks.find((el) => el.id === id);

    task.done = !task.done;

    saveToLocalStorage();

    renderTasks();

    renderPagination();

}

function addToFavorites(event) {
    if (event.target.dataset.action !== 'favorites') return;

    let parentNode = event.target.closest('.list_item');

    let id = Number(parentNode.id);

    let task = state.tasks.find((el) => el.id === id);

    task.favorites = !task.favorites;

    saveToLocalStorage();

    renderTasks();
}


function saveToLocalStorage() {
    localStorage.setItem('state', JSON.stringify(state));
}


function sortLists() {
    let todos = [];
    if (state.filter === 'completed') {
        todos = state.tasks.filter((el) => {
            return el.done;
        })
    } else if (state.filter === 'favorites') {
        todos = state.tasks.filter((el) => {
            return el.favorites;
        })
    } else if (state.filter === 'all') {
        todos = state.tasks;
    }
    return todos;
}


function renderTasks() {

    let sortedListOfEl = sortLists();

    let start = (state.currentPage - 1) * rowsPerPage;
    let end = start + rowsPerPage;

    // получаем срез одной страницы из задач
    let todosToRender = sortedListOfEl.slice(start, end);

    taskList.innerHTML = '';

    todosToRender.forEach(task => {
        const cssClass = task.done ? 'task_title done' : 'task_title';

        const cssClassFav = task.favorites ? 'bi bi-star-fill' : 'bi bi-star';


        const taskHTML = `<li class='list_item' id='${task.id}'>
                <span class='${cssClass}'>${task.task}</span>
                <div class='li_btns'>
                    <button type='button' data-action='favorites' class='btn_actn'>               
                        <i class='${cssClassFav}' alt='favorites'></i>
                    </button>
                    <button type='button' data-action='done' class='btn_actn'>
                        <i class='bi bi-check-lg' alt='done'></i>
                    </button>
                    <button type='button' data-action='delete' class='btn_actn'>
                        <i class='bi bi-trash' alt='delete'></i>
                    </button>
                </div>
            </li>`;

        taskList.insertAdjacentHTML('beforeend', taskHTML);
    });
    changeStatus();

}


function renderFilters() {
    const sectionsList = document.querySelector('.sections_list');

    const cssAll = state.filter === 'all' ? 'section-active' : '';
    const cssFav = state.filter === 'favorites' ? 'section-active' : '';
    const cssCompleted = state.filter === 'completed' ? 'section-active' : '';

    sectionsList.innerHTML = '';

    const sectionElHTML = `
        <div class='section all ${cssAll}'>Все задачи</div>
        <div class='section favorites ${cssFav}'>Избранное</div>
        <div class='section completed ${cssCompleted}'>Выполненные</div>`;

    sectionsList.insertAdjacentHTML('beforeend', sectionElHTML);

    const favoritesTasksBtn = document.querySelector('.favorites');
    const allTasksBtn = document.querySelector('.all');
    const doneTasksBtn = document.querySelector('.completed');

    favoritesTasksBtn.addEventListener('click', handleFavoritesFilterClick);
    allTasksBtn.addEventListener('click', handleAllTasksFilterClick);
    doneTasksBtn.addEventListener('click', handleDoneFilterClick);
}


//добавление кнопки
function renderPagination() {
    const paginationEl = document.querySelector('.container_pages');

    let sortedListOfEl = sortLists();

    const countOfPages = Math.ceil(sortedListOfEl.length / rowsPerPage);

    paginationEl.innerHTML = '';

    for (let i = 0; i < countOfPages; i++) {
        const pageBtnHTML = displayPaginationBtn(i + 1);
        paginationEl.appendChild(pageBtnHTML);
    }

    saveToLocalStorage();

}

//создание и отрисовка кнопки
function displayPaginationBtn(page) {
    const liEl = document.createElement('li');
    liEl.classList.add('pagination__item');
    liEl.innerText = page;

    if (state.currentPage === page) {
        liEl.classList.add('pagination__item-active')
    }
    ;

    liEl.addEventListener('click', () => {
        state.currentPage = page;
        renderTasks();
        renderPagination();
    })

    return liEl;

}


function changeStatus() {
    const createdListTitle = document.querySelector('.createdList_title');
    const createdTasksList = document.querySelector('.createdTasks_list');

    const HTML_El_Zero = `<div class='createdList_title'>На текущий момент создано 0 задач:</div>`;
    const HTML_El = `<div class='createdList_title'>На текущий момент создано ${state.tasks.length} задач(-и):</div>`;
    createdListTitle.remove();

    if (state.tasks.length === 0) {
        createdTasksList.insertAdjacentHTML('beforebegin', HTML_El_Zero);
    }
    if (state.tasks.length > 0) {
        createdTasksList.insertAdjacentHTML('beforebegin', HTML_El);
    }
}









