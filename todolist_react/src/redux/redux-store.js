import {combineReducers, createStore} from "redux";
import taskListReducer from "./task-list-reducer";

let reducers = combineReducers({
    tasks: taskListReducer
});

const lsState = JSON.parse(localStorage.getItem('todo_list_react'));

let Store = createStore(reducers, lsState);

window.store = Store;

export default Store;

//Подписываемся на изменения и сохраняем state в Local Storage
Store.subscribe(() => {
    console.log(Store.getState());

    const savedState = JSON.stringify(Store.getState());
    localStorage.setItem('todo_list_react', savedState);

})
