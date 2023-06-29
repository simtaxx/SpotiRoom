import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        accessToken: null,
        refreshAccessToken: null,
        user: null
    },
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        },
        setRefreshAccessToken: (state, action) => {
            state.refreshAccessToken = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { setAccessToken, setRefreshAccessToken, setUser } = userSlice.actions

export default userSlice.reducer
