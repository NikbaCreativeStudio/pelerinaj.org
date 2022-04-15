import {
   POST_ORDER_REQUEST,
   POST_ORDER_SUCCESS,
   POST_ORDER_FAILURE,
}
from '../services/actions/order';

export interface IOrder {
   readonly name: string;
   readonly phone: string;
   readonly order: string;
}

export interface IOrderRequest {
   readonly type: typeof POST_ORDER_REQUEST;
}

export interface IOrderSuccess {
   readonly type: typeof POST_ORDER_SUCCESS;
}

export interface IOrderFailure {
   readonly type: typeof POST_ORDER_FAILURE;
}

export type TSubmit = {
   readonly name: string;
   readonly phone: string;
   readonly order: string;
}

export interface IOrderInitialState {
   isLoading: boolean;
   order: boolean;
   error: boolean;
}

export type TOrderActionTypes = IOrderRequest | IOrderSuccess | IOrderFailure;