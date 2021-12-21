import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from './todos-rtk-store';

/*
 * useDispatch is a hook that makes the dispath function available
 * useSelector selects a slice of state
 *
 * Here, we customize them to make them aware of the types in our application
 */

export const useAppDispatch = () => useDispatch<AppDispatch>();

// Alias the function, and and typing information.
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
