import { createSlice, configureStore } from '@reduxjs/toolkit';




let slice = createSlice({
    name: 'count',
    initialState: {
        value: 0
    },
    reducers: {
        increament: (prevState, action) => {

            prevState.value = prevState.value + 1

        },
        decreament: (prevState, action) => {

            prevState.value = prevState.value - 1

        },

    }
})



export let { increament, decreament } = slice.actions


export let store = configureStore({
    reducer: slice.reducer
})



