import { baseUrl } from '../../utils/config';

import { IPageRequest, IPageSuccess, IPageFailure, IPage } from '../../types/page';
import { AppThunk, AppDispatch } from '../../types/index';

export const GET_PAGE_REQUEST: 'GET_PAGE_REQUEST' = 'GET_PAGE_REQUEST';
export const GET_PAGE_SUCCESS: 'GET_PAGE_SUCCESS' = 'GET_PAGE_SUCCESS';
export const GET_PAGE_FAILURE: 'GET_PAGE_FAILURE' = 'GET_PAGE_FAILURE';

export const getPageRequest = (): IPageRequest => ({
    type: GET_PAGE_REQUEST,
});

export const getPageSuccess = (payload: IPage): IPageSuccess => ({
    type: GET_PAGE_SUCCESS,
    payload,
});

export const getPageFailure = (): IPageFailure => ({
    type: GET_PAGE_FAILURE,
});

export const getPage: AppThunk = (id: number) => async (dispatch: AppDispatch) => {
    dispatch(getPageRequest());

    try {
        const response = await fetch(`${baseUrl}items/pages/${id}`);
        const page = await response.json();

        dispatch(getPageSuccess(page.data));
    } catch (error) {
        dispatch(getPageFailure());
    }

}