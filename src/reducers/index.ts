import { combineReducers } from 'redux';

import todosReducer from './todos';
import usersReducer from './users';

const rooReducer = combineReducers({
    users: usersReducer,
    todos: todosReducer,
})

export type rooReducerType = ReturnType<typeof rooReducer>;

export default rooReducer;