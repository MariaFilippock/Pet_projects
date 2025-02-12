import React from 'react';
import styles from './Filters.module.css';
import {connect} from "react-redux";
import {changeFilterCreator} from "../redux/task-list-reducer";

const Filters = ({filter, onFilterChange}) => {
    let handleFilterChange = (event) => {
        onFilterChange(event.target.id);
    }

    return (
        <div onClick={handleFilterChange} className={styles.filtersList}>
            <div id='all' className={styles.filter + ' ' + (filter === 'all' ? styles.active : '')}>Все задачи</div>
            <div id='favorites' className={styles.filter + ' ' + (filter === 'favorites' ? styles.active : '')}>Избранное</div>
            <div id='done' className={styles.filter + ' ' + (filter === 'done' ? styles.active : '')}>Выполненные</div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        filter: state.tasks.filter,
        // pagesCount: state.tasks.list.length,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onFilterChange: (id, pagesQuantity) => {
            const action = changeFilterCreator(id, pagesQuantity);
            dispatch(action);
        },
    }
}

const connectedFilters = connect(mapStateToProps, mapDispatchToProps)(Filters);

export default connectedFilters;