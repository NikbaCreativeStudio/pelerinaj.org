import {
    GET_CARDS_REQUEST,
    GET_CARDS_SUCCESS,
    GET_CARDS_FAILURE,
}
from '../services/actions/cards';

export interface ICardItem {
    readonly id: number;
    readonly title: string;
    readonly text: string;
    readonly short: string;
    readonly date: string;
    readonly image: string | any;
    readonly country: string | any;
}

export type TCardProps = {
    readonly card: ICardItem;
    readonly isLoading?: boolean;
    readonly error?: string;
};

export interface ICardInitialState {
    isLoading: boolean;
    cards: ICardItem[];
    error: string;
}

export interface ICardSuccess {
    readonly type: typeof GET_CARDS_SUCCESS;
    readonly payload: ICardItem[];
}

export interface ICardFailure {
    readonly type: typeof GET_CARDS_FAILURE;
    readonly payload: string;
}

export interface ICardRequest {
    readonly type: typeof GET_CARDS_REQUEST;
}

export type TCardActionTypes = ICardSuccess | ICardFailure | ICardRequest;