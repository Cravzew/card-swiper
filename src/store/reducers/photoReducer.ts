import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export interface IPhotoProps {
    url: string,
    status: string,
    error: any
}

export const fetchPhoto = createAsyncThunk(
    'photo/fetchPhoto',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://api.waifu.pics/sfw/waifu')

            if (!response.ok) {
                throw new Error()
            }

            const data = response.json()

            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const initialState: IPhotoProps = {
    url: '',
    status: null,
    error: null
}

export const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {},
    extraReducers: (fetch) => {
        fetch.addCase(fetchPhoto.pending, (state) => {
            state.status = 'loading';
            state.error = null
        })
        fetch.addCase(fetchPhoto.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.url = action.payload
        })
        fetch.addCase(fetchPhoto.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        })
    }
})

export const {} = photoSlice.actions

export default photoSlice.reducer