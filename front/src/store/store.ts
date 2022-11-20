import { rootReducer } from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: rootReducer
});
export type AppState = ReturnType<typeof rootReducer>
