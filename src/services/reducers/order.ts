import {
    POST_ORDER_REQUEST,
    POST_ORDER_SUCCESS,
    POST_ORDER_FAILURE,
 }
from '../actions/order';

import { IOrderInitialState, TOrderActionTypes } from '../../types/order';

export const orderInitialState: IOrderInitialState = {
    isLoading: false,
    order: false,
    error: false,
};

export const orderReducer = (state = orderInitialState, action: TOrderActionTypes): IOrderInitialState => {
    switch (action.type) {
        case POST_ORDER_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case POST_ORDER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                order: true,
            };
        case POST_ORDER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        default:
            return state;
    }
}
