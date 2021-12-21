import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, AppState } from './users-store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
