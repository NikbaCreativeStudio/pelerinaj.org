import { baseUrl, email, token } from '../../utils/config';

import { IOrderRequest, IOrderSuccess, IOrderFailure, IOrder } from '../../types/order';
import { AppThunk, AppDispatch } from '../../types/index';

export const POST_ORDER_REQUEST: 'POST_ORDER_REQUEST' = 'POST_ORDER_REQUEST';
export const POST_ORDER_SUCCESS: 'POST_ORDER_SUCCESS' = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILURE: 'POST_ORDER_FAILURE' = 'POST_ORDER_FAILURE';

export const postOrderRequest = (): IOrderRequest => ({
    type: POST_ORDER_REQUEST,
});

export const postOrderSuccess = (): IOrderSuccess => ({
    type: POST_ORDER_SUCCESS,
});

export const postOrderFailure = (): IOrderFailure => ({
    type: POST_ORDER_FAILURE
});

export const postOrder: AppThunk = (order: IOrder) => async (dispatch: AppDispatch) => {
    dispatch(postOrderRequest());

    const body = {
        "to": email,
        "subject": "Comandă de pe www.pelerinaj.org",
        "body": `Nume: ${order.name} <br /> Telefon: ${order.phone} <br /> Comandă: ${order.order}`,
        "type": "html",
    }

    try {
        const response = await fetch(`${baseUrl}mail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            
            body: JSON.stringify(body),
        });

        if (response.status === 204) {
            dispatch(postOrderSuccess());
        }
        else {
            throw new Error(response.statusText);
        }


        
    } catch (error) {
        dispatch(postOrderFailure());
    }
}