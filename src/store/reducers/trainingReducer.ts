import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface trainingReducer {
    show: boolean
}

const initialState: trainingReducer = {
    show: true
}

export const trainingSlice = createSlice({
    name: 'training',
    initialState,
    reducers: {
        setShow(state, action: PayloadAction<boolean>) {
            state.show = action.payload
        }
    }
})

export const {setShow} = trainingSlice.actions
export const training = (state: RootState) => state.training
export default trainingSlice.reducer