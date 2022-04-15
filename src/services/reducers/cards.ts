import {
    GET_CARDS_REQUEST,
    GET_CARDS_SUCCESS,
    GET_CARDS_FAILURE,
}
from '../actions/cards';

import { ICardInitialState, TCardActionTypes } from '../../types/cards';

export const cardsInitialState: ICardInitialState = {
    isLoading: false,
    cards: [],
    error: '',
};

export const cardsReducer = (state = cardsInitialState, action: TCardActionTypes): ICardInitialState => {
    switch (action.type) {
        case GET_CARDS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_CARDS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cards: action.payload,
            };
        case GET_CARDS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}