import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';




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

let movieSlice = createSlice({
    name: 'movies',
    initialState: {
        value: []
    },
    reducers: {

        addMovies: (prevState, action) => {

            console.log(action);

            prevState.value = [...action.payload]



        }

    }
})



export let { increament, decreament } = slice.actions
export let { addMovies } = movieSlice.actions

let rootReducer = combineReducers({
    count: slice.reducer,
    movies: movieSlice.reducer,
})


export let store = configureStore({
    reducer: rootReducer
})



