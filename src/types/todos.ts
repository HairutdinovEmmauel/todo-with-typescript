import { ACTION_TYPES } from '../constants'

export interface TodosStateI {
    loading: boolean,
    todos: any[],
    error: null | string,
}

interface StartedRequestTodos {
    type: ACTION_TYPES.TodosActionTypes.STARTED_REQUEST_TODOS,
    payload: boolean,
}

interface RequestTodosSuccess {
    type: ACTION_TYPES.TodosActionTypes.REQUEST_TODOS_SUCCESS,
    payload: any[],
}

interface RequestTodosFailure {
    type: ACTION_TYPES.TodosActionTypes.REQUEST_TODOS_FAILURE,
    payload: null | string,
}

export type TodosActionTypes = StartedRequestTodos | RequestTodosSuccess | RequestTodosFailure; 