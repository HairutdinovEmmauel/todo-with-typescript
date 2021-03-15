import { ACTION_TYPES } from '../constants'

export interface UsersStateI {
    loading: boolean,
    users: any[],
    error: null | string,
}

interface StartedRequestUsers {
    type: ACTION_TYPES.UsersActionTypes.STARTED_REQUEST_USERS,
    payload: boolean,
}

interface RequestUsersSuccess {
    type: ACTION_TYPES.UsersActionTypes.REQUEST_USERS_SUCCESS,
    payload: any[],
}

interface RequestUsersFailure {
    type: ACTION_TYPES.UsersActionTypes.REQUEST_USERS_FAILURE,
    payload: null | string,
}

export type UsersActionTypes = StartedRequestUsers | RequestUsersSuccess | RequestUsersFailure; 