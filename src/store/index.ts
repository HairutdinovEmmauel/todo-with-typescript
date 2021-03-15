import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rooReducer from '../reducers';

const store = createStore( rooReducer, applyMiddleware(thunk) );

export default store;