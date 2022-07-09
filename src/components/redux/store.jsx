import { createStore, applyMiddleware, combineReducers } from 'redux';
import {cartReducer} from './cartReducer'


const reducer = combineReducers({
	cartReducer: cartReducer,
	
});

export const store = createStore(reducer)