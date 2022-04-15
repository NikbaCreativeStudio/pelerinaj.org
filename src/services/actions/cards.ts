import { baseUrl } from '../../utils/config';

import { ICardItem, ICardSuccess, ICardFailure, ICardRequest } from '../../types/cards';
import { AppThunk, AppDispatch } from '../../types/index';

export const GET_CARDS_REQUEST: 'GET_CARDS_REQUEST' = 'GET_CARDS_REQUEST';
export const GET_CARDS_SUCCESS: 'GET_CARDS_SUCCESS' = 'GET_CARDS_SUCCESS';
export const GET_CARDS_FAILURE: 'GET_CARDS_FAILURE' = 'GET_CARDS_FAILURE';

export const getCardsRequest = (): ICardRequest => ({
    type: GET_CARDS_REQUEST,
});

export const getCardsSuccess = (cards: ICardItem[]): ICardSuccess => ({
    type: GET_CARDS_SUCCESS,
    payload: cards,
});

export const getCardsFailure = (error: string): ICardFailure => ({
    type: GET_CARDS_FAILURE,
    payload: error,
});


export const getCards: AppThunk = () => async (dispatch: AppDispatch) => {
    dispatch(getCardsRequest());

    try {
        const response = await fetch(`${baseUrl}items/offers?fields=id,date,title,short,text,image.data,country.title, country.image.data`);
        const cards = await response.json();

        dispatch(getCardsSuccess(cards.data));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(getCardsFailure(error.message));
        }
        else {
            console.log('Unexpected error', error);
        }
    }
}
