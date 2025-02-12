import React, {useEffect} from 'react';
import styles from './TaskItem.module.css';

const TaskItem = (props) => {
    const handleToggleFavorites = () => {
        props.onFavoriteClick(props.task.id);
    }
    const handleToggleDone = () => {
        props.onDoneClick(props.task.id);
    }
    const handleDeleteTask = () => {
        props.onDeleteClick(props.task.id);
    }

    return (
        <div className={styles.item}>
            <div id={props.task.id} className={styles.title+' '+(props.task.isDone ? styles.done : '')}>{props.task.taskText}</div>
            <div className={styles.btns}>
                <span id='favorites' onClick={handleToggleFavorites} className={styles.btn+' '+styles.favorite+' '+(props.task.isFavorite ? styles.gold : '')}><ion-icon
                    name={props.task.isFavorite ? 'star' : 'star-outline'}></ion-icon></span>
                <span id='done' onClick={handleToggleDone} className={styles.btn+' '+styles.completed+' '+(props.task.isDone ? styles.green : '')}><ion-icon
                    name={props.task.isDone ? 'checkmark-done-circle' : 'checkmark-done-circle-outline'}></ion-icon></span>
                <span id='delete' onClick={handleDeleteTask} className={styles.btn+' '+styles.delete}><ion-icon name="close-circle-outline"></ion-icon></span>
            </div>
        </div>
    )
}

export default TaskItem;