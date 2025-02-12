import React from 'react';
import styles from './App.module.css';
import Input from './components/Input';
import Filters from './components/Filters';
import TaskList from './components/TaskList';
import Pagination from './components/Pagination';
import {connect} from "react-redux";


const App = ({count, list, filter, pagination}) => {
    //вывести те элементы на странице, на которую щелкнули
    let filteredList = [];

    if (filter === 'done') {
        filteredList = list.filter((task) => {
            return task.isDone;
        })
    } else if (filter === 'favorites') {
        filteredList = list.filter((task) => {
            return task.isFavorite;
        })
    } else {
        filteredList = list;
    }


    let start = (pagination.chosenPage - 1) * pagination.rowsPerPage;
    let end = start + pagination.rowsPerPage;
    let resultList = filteredList.slice(start, end);

    let pagesQuantity = Math.ceil(filteredList.length / pagination.rowsPerPage);

    return (
        <div className={styles.container}>
            <div className={styles.title}>Список задач:</div>
            <Input/>
            <div className={styles.subtitle}>На текущий момент создано {count} задач (-и):</div>
            <Filters/>
            <TaskList list={resultList}/>
            <Pagination pagesQuantity={pagesQuantity}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        count: state.tasks.list.length,
        list: state.tasks.list,
        filter: state.tasks.filter,
        pagination: state.tasks.pagination,
    }
}


export const connectedApp = connect(mapStateToProps)(App);

export default connectedApp;