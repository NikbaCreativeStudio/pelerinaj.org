
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { rootReducer } from '../services/reducers';

import { TCardActionTypes } from './cards';

type TApplicationActions = TCardActionTypes;

export type RootState = ReturnType<typeof rootReducer>
export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;
export type AppDispatch = Dispatch<TApplicationActions>;