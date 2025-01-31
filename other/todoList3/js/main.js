//находим элементы на странице
const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const btn = document.querySelector('.btn-primary');
const tasksList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');


//создадим массив, который будет хранит в себе данные по задачам
let tasks = [];

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((task) => renderTask(task));
}


checkEmptyLists();

form.addEventListener('submit', addTask)
tasksList.addEventListener('click', deleteTask)
tasksList.addEventListener('click', doneTask)


//2 Функции

//вынесли и записали отдельно функцию по добавлению задачи из инпута в общий список
function addTask(event) {
    //отменяем отправку формы
    event.preventDefault();

    //достаем текст задачи из поля ввода
    const taskText = taskInput.value;

    //описываем задачу в виде объекта
    const newTask = {
        id: Date.now(),
        text: taskText,
        done: false
    }

    //добавляем задачу в массив с задачами
    tasks.push(newTask);

    //сохраняем список задач в хранилище браузера localStorage
    savetoLS();

    //отрисовываем элемент задачи в html
    renderTask(newTask);

    //очищаем поле ввода и возвращаем фокус на него
    taskInput.value = '';
    taskInput.focus();

    checkEmptyLists();

}

function deleteTask(event) {
    //проверяем, что клик был не по кнопке
    if (event.target.dataset.action !== 'delete') return;

    const parentNode = event.target.closest('.list-group-item');

    //определяем ID задачи
    const id = Number(parentNode.id);

    //удаляем через фильтрацию массива
    tasks = tasks.filter((task) => task.id !== id)

    savetoLS();

    //удаляем задачу из разметки
    parentNode.remove();

    checkEmptyLists();

}

function doneTask(event) {
    //проверяем, что клик был не по кнопке
    if (event.target.dataset.action !== 'done') return;

    //нашли родительский элемент
    const parentNode = event.target.closest('.list-group-item');

    const id = Number(parentNode.id);

    const task = tasks.find((task) => task.id === id)

    task.done = !task.done

    //сохраняем список задач в хранилище браузера localStorage
    savetoLS();

    //теперь внутри родительского ищем элемент, куда добавим класс
    const taskTitle = parentNode.querySelector('span');
    taskTitle.classList.toggle('task-title--done');


}

function checkEmptyLists() {
    if (tasks.length === 0) {
        const emptyListHTML = `<li id="emptyList" class="list-group-item empty-list">
                               <img src="./img/leaf.svg" alt="Empty" width="48" class="mt-3">
                               <div class="empty-list__title">Список дел пуст</div>
                               </li>`
        tasksList.insertAdjacentHTML('afterbegin', emptyListHTML);
    }

    if (tasks.length > 0) {
        const emptyListEl = document.querySelector('#emptyList');
        emptyListEl ? emptyListEl.remove() : null;
    }
}

function savetoLS() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function renderTask(task) {

    //Формируем CSS класс
    const cssClass = task.done ? 'task-title task-title--done' : 'task-title';


    //формируем разметку для новой задачи
    const taskHTML = `
    <li id = '${task.id}' class="list-group-item d-flex justify-content-between task-item">
        <span class='${cssClass}'>${task.text}</span>
        <div class="task-item__buttons">
            <button type="button" data-action="done" class="btn-action">
                <img src="./img/tick.svg" alt="Done" width="18" height="18">
            </button>
            <button type="button" data-action="delete" class="btn-action">
                <img src="./img/cross.svg" alt="Done" width="18" height="18">
            </button>
        </div>
    </li>`;

    // добавляем задачу на страницу
    tasksList.insertAdjacentHTML('beforeend', taskHTML);
}