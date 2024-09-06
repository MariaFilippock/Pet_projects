let addMessage = document.querySelector('.message');
let addButton = document.getElementById('todo-add');
let todo = document.querySelector('.todo-list');

//пишем обработчик события, который добавляет новый пункт после введения в инпут
let todoList = [];

if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}

addButton.addEventListener('click', function () {
    let newToDo = {
        todo: addMessage.value,
        checked: false,
        important: false
    };
    let isDuplicated = todoList.some(item => {
        return item.todo === newToDo.todo
    })

    if (newToDo.todo && !isDuplicated) {
        todoList.push(newToDo);
        displayMessages();
        addMessage.value = '';
        localStorage.setItem('todo', JSON.stringify(todoList));
    }
});

//пишем функцию по добавлению нового пункта в туду-списке

function displayMessages() {
    let displayMessage = '';

    if (todoList.length === 0) {
        todo.innerHTML = ''
    }

    todoList.forEach((el, i) => {
            displayMessage += `
            <li>
            <input type='checkbox' id='item_${i}' ${el.checked ? 'checked' : ''}>
            <label for='item_${i}' class='${el.important ? 'important' : ''}'>${el.todo}</label>
            </li>
            `;
            todo.innerHTML = displayMessage;

        }
    )

}


todo.addEventListener('change', function (event) {
    let IdInput = event.target.getAttribute('id');
    let labelValue = todo.querySelector('[for=' + IdInput + ']').innerHTML;

    todoList.forEach(function (el) {
        if (el.todo === labelValue) {
            el.checked = !el.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    })
})

todo.addEventListener('contextmenu', function (event) {

    event.preventDefault();
    todoList.forEach(function (item, i) {
        if (item.todo === event.target.innerHTML) {
            if (event.ctrlKey || event.metaKey) {
                todoList.splice(i, 1);
            } else {
                item.important = !item.important;

            }
            displayMessages();
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    })
})