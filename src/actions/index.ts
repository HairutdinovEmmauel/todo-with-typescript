import axios from 'axios';

// Typing
import { ThunkAction } from 'redux-thunk';
import { rooReducerType } from '../reducers';
import { UsersActionTypes } from '../types/users';
import { TodosActionTypes } from '../types/todos';

// Constats
import { ACTION_TYPES } from '../constants';

export const requestUsers = (): ThunkAction<Promise<void>, rooReducerType, unknown, UsersActionTypes> => {

    return async (dispatch) => {

        dispatch({
            type: ACTION_TYPES.UsersActionTypes.STARTED_REQUEST_USERS,
            payload: true,
        })

        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');

            dispatch({
                type: ACTION_TYPES.UsersActionTypes.REQUEST_USERS_SUCCESS,
                payload: res.data,
            })

            dispatch({
                type: ACTION_TYPES.UsersActionTypes.REQUEST_USERS_FAILURE,
                payload: null,
            })
        } catch (e) {
            dispatch({
                type: ACTION_TYPES.UsersActionTypes.REQUEST_USERS_FAILURE,
                payload: "Request went not success" ,
            })
        } finally {
            dispatch({
                type: ACTION_TYPES.UsersActionTypes.STARTED_REQUEST_USERS,
                payload: false,
            })
        }
    }  
}

export const requestTodos = (page: number = 1, limit: number = 10): ThunkAction<Promise<void>, rooReducerType, unknown, TodosActionTypes> => {
    return async (dispatch) => {

        dispatch({
            type: ACTION_TYPES.TodosActionTypes.STARTED_REQUEST_TODOS,
            payload: true,
        })

        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params : {
                    _page: page,
                    _limit: limit,
                }
            });

            dispatch({
                type: ACTION_TYPES.TodosActionTypes.REQUEST_TODOS_SUCCESS,
                payload: res.data,
            })

            dispatch({
                type: ACTION_TYPES.TodosActionTypes.REQUEST_TODOS_FAILURE,
                payload: null,
            })
        } catch (e) {

            dispatch({
                type: ACTION_TYPES.TodosActionTypes.REQUEST_TODOS_FAILURE,
                payload: "Request went not success",
            })
        } finally {

            dispatch({
                type: ACTION_TYPES.TodosActionTypes.STARTED_REQUEST_TODOS,
                payload: false,
            })
        }
    }  
}