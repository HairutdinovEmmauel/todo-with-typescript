import { UsersStateI, UsersActionTypes } from "../types/users";
import { ACTION_TYPES } from '../constants'

const initialState: UsersStateI = {
    loading: false,
    users: [],
    error: null
}

const usersReducer = (state = initialState, action: UsersActionTypes): UsersStateI => {
    switch(action.type) {
        case ACTION_TYPES.UsersActionTypes.STARTED_REQUEST_USERS: 
            return {
                ...state,
                loading: action.payload,
            }
        case ACTION_TYPES.UsersActionTypes.REQUEST_USERS_SUCCESS: 
            return {
                ...state,
                users: action.payload,
            }
        case ACTION_TYPES.UsersActionTypes.REQUEST_USERS_FAILURE: 
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

export default usersReducer;