
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { rootReducer } from '../services/reducers';

import { TCardActionTypes } from './cards';
import { TOrderActionTypes } from './order';
import { PageActionTypes } from './page';

type TApplicationActions = TCardActionTypes | TOrderActionTypes | PageActionTypes;

export type RootState = ReturnType<typeof rootReducer>
export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;
export type AppDispatch = Dispatch<TApplicationActions>;