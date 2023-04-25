import {configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import photoReducer from "./reducers/photoReducer";
import trainingReducer from "./reducers/trainingReducer";

export const store = configureStore({
    reducer: {
        photo: photoReducer,
        training: trainingReducer,
    },
    preloadedState: loadFromLocalStorage()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

function saveToLocalStorage(state: RootState) {

    try {
        const serialState = JSON.stringify(state)
        localStorage.setItem("reduxStore", serialState)
    } catch (e) {
        console.warn(e);
    }
}

function loadFromLocalStorage() {

    try {
        const serialisedState = localStorage.getItem("reduxStore");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

store.subscribe(() => saveToLocalStorage(store.getState()));

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector