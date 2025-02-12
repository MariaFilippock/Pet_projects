const ADD_NEW_TASK_TO_LIST = 'ADD_NEW_TASK_TO_LIST';
const UPDATE_TODO_LIST = 'UPDATE_TODO_LIST';
const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';
const TOGGLE_DONE = 'TOGGLE_DONE';
const DELETE_TASK = 'DELETE_TASK';
const CHANGE_FILTER = 'CHANGE_FILTER';
const UPDATE_PAGINATION = 'UPDATE_PAGINATION';
const CHANGE_ROWS_PER_PAGE = 'CHANGE_ROWS_PER_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';



let initialState = {
    list: [
        {
            taskText: 'потеребить собаку-каку',
            id: 1,
            isFavorite: true,
            isDone: false,
        },
        {
            taskText: 'выгулять собаку-каку',
            id: 2,
            isFavorite: false,
            isDone: false,
        },
        {
            taskText: 'покормить "камушками" собаку-каку',
            id: 3,
            isFavorite: false,
            isDone: true,
        },
        {
            taskText: 'позаниматься React-ом',
            id: 4,
            isFavorite: false,
            isDone: false,
        },
        {
            taskText: 'потренить',
            id: 5,
            isFavorite: false,
            isDone: false,
        },
        {
            taskText: 'потренить',
            id: 6,
            isFavorite: false,
            isDone: false,
        },
    ],
    inputText: '',
    filter: 'all',
    pagination: {
        chosenPage: 1,
        pagesCount: 1,
        rowsPerPage: 5,
    },
    isFetching: false,
}

const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TASK_TO_LIST: {
            return {
                ...state,
                list: [...state.list, {taskText: state.inputText, id: Date.now(), isFavorite: false, isDone: false,}],
                inputText: ''
            }
        }
        case UPDATE_TODO_LIST: {
            return {
                ...state,
                inputText: action.newText,
            }
        }
        case TOGGLE_FAVORITES: {
            return {
                ...state,
                list: state.list.map(item => {
                    return item.id === action.id ? {...item, isFavorite: !item.isFavorite} : item
                })
            }
        }
        case TOGGLE_DONE: {
            return {
                ...state,
                list: state.list.map(item => {
                    return item.id === action.id ? {...item, isDone: !item.isDone} : item
                })
            }
        }
        case DELETE_TASK: {
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.id)
            }
        }
        case CHANGE_FILTER: {
            debugger
            return {
                ...state,
                filter: action.filterType,
                pagination: {...state.pagination, chosenPage: 1}
            }
        }
        case UPDATE_PAGINATION: {
            return {
                ...state,
                pagination: {...state.pagination, chosenPage: action.currentPage, pagesCount: action.pagesCount}
            }
        }
        case CHANGE_ROWS_PER_PAGE: {
            return {
                ...state,
                pagination: {...state.pagination, rowsPerPage: action.rowsPerPage}
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        default:
            return state;
    }
}


export const addPostCreator = () => ({type: ADD_NEW_TASK_TO_LIST})
export const updateTaskTextActionCreator = (text) =>
    ({type: UPDATE_TODO_LIST, newText: text})

//добавление в избранное, выполненные
export const toggleFavoritesCreator = (id) =>
    ({type: TOGGLE_FAVORITES, id: id})
export const toggleDoneCreator = (id) =>
    ({type: TOGGLE_DONE, id: id})
export const deleteTask = (id) =>
    ({type: DELETE_TASK, id: id})

//фильтрация списка
export const changeFilterCreator = (id) =>
    ({type: CHANGE_FILTER, filterType: id})

//пагинация
export const updatePaginationCreator = (pageNumber, pagesCount) =>
    ({type: UPDATE_PAGINATION, currentPage: pageNumber, pagesCount: pagesCount })

export const updateRowsPerPageCreator = (rowsPerPage) =>
    ({type: CHANGE_ROWS_PER_PAGE, rowsPerPage: rowsPerPage })
//удалить
export const toggleIsFetchingCreator = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})



export default taskListReducer;