import React from 'react';
import styles from './Input.module.css';
import {addPostCreator, updateTaskTextActionCreator} from '../redux/task-list-reducer';
import {connect} from "react-redux";

const Input = ({inputText, onInputChange, onCreateTask}) => {
    const handleInputChange = (event) => {
        onInputChange(event.target.value);
    }

    const handleCreateTask = (event) => {
        event.preventDefault();
        onCreateTask();
    }

    return (
        <div>
            <form id='form' className={styles.form}>
                <input className={styles.input} value={inputText} onChange={handleInputChange} type='text' placeholder='Введите задачу...'
                       required/>
                <button className={styles.btn} onClick={handleCreateTask}>Создать задачу</button>
            </form>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        inputText: state.tasks.inputText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onInputChange: (value) => {
            const action = updateTaskTextActionCreator(value);
            dispatch(action);
        },
        onCreateTask: () => {
            const action = addPostCreator();
            dispatch(action);
        },
    }
}

const connectedInput = connect(mapStateToProps, mapDispatchToProps)(Input);
export default connectedInput;


