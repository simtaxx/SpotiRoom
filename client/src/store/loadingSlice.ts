import { createSlice } from '@reduxjs/toolkit'

export const loading = createSlice({
    name: 'loader',
    initialState: {
        isAlbumsLoading: false
    },
    reducers: {
        setIsAlbumsloading: (state, action) => {
            state.isAlbumsLoading = action.payload
        }
    }
})

export const { setIsAlbumsloading } = loading.actions

export default loading.reducer
