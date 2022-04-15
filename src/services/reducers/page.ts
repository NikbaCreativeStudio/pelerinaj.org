import {
    GET_PAGE_REQUEST,
    GET_PAGE_SUCCESS,
    GET_PAGE_FAILURE,
} from '../actions/page';

import { IPageInitialState, PageActionTypes } from '../../types/page';

const pageInitialState: IPageInitialState = {
    isLoading: false,
    page: null,
    error: false,
};

export const pageReducer = ( state = pageInitialState, action: PageActionTypes ): IPageInitialState => {
    switch (action.type) {
        case GET_PAGE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
            };
        case GET_PAGE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                page: action.payload,
                error: false,
            };
        case GET_PAGE_FAILURE:
            return {
                ...state,
                isLoading: false,
                page: null,
                error: true,
            };
        default:
            return state;
    }
}

