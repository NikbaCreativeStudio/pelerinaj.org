import {
    GET_PAGE_REQUEST,
    GET_PAGE_SUCCESS,
    GET_PAGE_FAILURE,
}
from '../services/actions/page';

export interface IPage {
    id: number,
    title: string,
    text: string,
};

export interface IPageRequest {
    type: typeof GET_PAGE_REQUEST,
};

export interface IPageSuccess {
    type: typeof GET_PAGE_SUCCESS,
    payload: IPage,
};

export interface IPageFailure {
    type: typeof GET_PAGE_FAILURE,
};

export interface IPageInitialState {
    isLoading: boolean,
    page: IPage | null,
    error: boolean,
};

export type PageActionTypes = IPageRequest | IPageSuccess | IPageFailure;