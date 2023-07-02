import { createSlice } from '@reduxjs/toolkit'

export const errors = createSlice({
    name: 'errors',
    initialState: {
        isError: false,
        message: ''
    },
    reducers: {
        setIsError: (state, action) => {
            state.isError = action.payload
        },
        setErrorMessage: (state, action) => {
            state.isError = action.payload
        }
    }
})

export const { setIsError, setErrorMessage } = errors.actions

export default errors.reducer
