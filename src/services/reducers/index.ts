import { combineReducers } from 'redux';
import { cardsReducer } from './cards';
import { orderReducer } from './order';
import { pageReducer } from './page';

export const rootReducer = combineReducers({
    // Add reducers here
    cards: cardsReducer,
    order: orderReducer,
    page: pageReducer,
});