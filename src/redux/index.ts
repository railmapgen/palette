import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import appReducer from './app/app-slice';
import ticketReducer from './ticket/ticket-slice';

const store = configureStore({
    reducer: {
        app: appReducer,
        ticket: ticketReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;
export const useRootDispatch = () => useDispatch<RootDispatch>();
export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

(window as any).xyStore = store;
