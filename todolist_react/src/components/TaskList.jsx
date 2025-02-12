import React, {useEffect} from 'react';
import TaskItem from "./TaskItem";
import {connect} from "react-redux";
import {deleteTask, toggleDoneCreator, toggleFavoritesCreator} from "../redux/task-list-reducer";


const TaskList = ({list, onAddToFavorites, onAddToDone, onDeleteTask}) => {

    let taskItems = list.map((task) => {
        return <TaskItem task={task} key={task.id} onFavoriteClick={onAddToFavorites} onDoneClick={onAddToDone} onDeleteClick={onDeleteTask}/>
    })

    return (
        <div>
            {taskItems}
        </div>
    )
}


let mapDispatchToProps = (dispatch) => {
    return {
        onAddToFavorites: (id) => {
            const action = toggleFavoritesCreator(id);
            dispatch(action);
        },
        onAddToDone: (id) => {
            const action = toggleDoneCreator(id);
            dispatch(action);
        },
        onDeleteTask: (id) => {
            const action = deleteTask(id);
            dispatch(action);
        },
    }
}

const connectedTaskList = connect(null, mapDispatchToProps)(TaskList);
export default connectedTaskList;

