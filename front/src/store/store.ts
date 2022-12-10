import { rootReducer } from './rootReducer';
import { AnyAction, configureStore, ThunkDispatch } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});
export type AppState = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppState, any, AnyAction>;
