import { TodosStateI, TodosActionTypes } from "../types/todos";
import { ACTION_TYPES } from '../constants'

const initialState: TodosStateI = {
    loading: false,
    todos: [],
    error: null
}

const todosReducer = (state = initialState, action: TodosActionTypes): TodosStateI => {
    switch(action.type) {
        case ACTION_TYPES.TodosActionTypes.STARTED_REQUEST_TODOS: 
            return {
                ...state,
                loading: action.payload,
            }
        case ACTION_TYPES.TodosActionTypes.REQUEST_TODOS_SUCCESS: 
            return {
                ...state,
                todos: action.payload,
            }
        case ACTION_TYPES.TodosActionTypes.REQUEST_TODOS_FAILURE: 
            return {
                ...state,
                error: action.payload,
            }
        default: 
            return {
                ...state,
            }
    }
}

export default todosReducer;