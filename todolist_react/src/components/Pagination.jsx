import React, {useEffect} from 'react';
import styles from './Pagination.module.css';
import {connect} from "react-redux";
import {toggleIsFetchingCreator, updatePaginationCreator, updateRowsPerPageCreator} from "../redux/task-list-reducer";

export const ROWS_PER_PAGE_ARRAY = [5, 10, 15];

const Pagination = ({chosenPage, onChangePagination, pagesQuantity, onChangeRowsPerPage, rowsPerPage}) => {
    //пагинация
    let handleChangeChosenPage = (event) => {
        if (!event.target.id) {
            return
        }
        onChangePagination(Number(event.target.id), pagesQuantity);
    }

    //кол-во строк на странице
    let handleChangeRowsPerPage = (event) => {
        if (!event.target.value) {
            return
        }
        onChangeRowsPerPage(Number(event.target.value));
    }

    let pagination = [...Array(pagesQuantity).keys()].map(i => Number(i + 1));

    return (
        <div className={styles.pagination}>
            <div className={styles.pages} onClick={handleChangeChosenPage}>
                {pagination.map((page) => {
                    return (<span className={styles.paginationButton + ' ' + (page === chosenPage ? styles.active : styles.default)} id={page}
                                  key={page}>{page}</span>)
                })}
            </div>
            <div className={styles.pageSelection}>
                <select className={styles.selectionRows} value={rowsPerPage} onChange={handleChangeRowsPerPage}>
                    {ROWS_PER_PAGE_ARRAY.map((rowsQuantity) => {
                        return <option value={rowsQuantity}
                                       key={rowsQuantity}>{rowsQuantity}</option>
                    })}
                </select>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        chosenPage: state.tasks.pagination.chosenPage,
        rowsPerPage: state.tasks.pagination.rowsPerPage,
        isFetching: state.tasks.isFetching,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangePagination: (pageNumber, pageQuantity) => {
            let action = updatePaginationCreator(pageNumber, pageQuantity);
            dispatch(action);
        },
        onChangeRowsPerPage: (rowsPerPage) => {
            let action = updateRowsPerPageCreator(rowsPerPage);
            dispatch(action);
        },
        toggleIsFetching: (isFetching) => {
            let action = toggleIsFetchingCreator(isFetching);
            dispatch(action);
        }
    }
}

const connectedPagination = connect(mapStateToProps, mapDispatchToProps)(Pagination);

export default connectedPagination;

