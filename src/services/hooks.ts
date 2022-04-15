import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector
  } from 'react-redux';
  import { RootState, AppDispatch, AppThunk } from '../types/index';
  
  export const useAppDispatch = () => useDispatch<AppDispatch | AppThunk>();
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;