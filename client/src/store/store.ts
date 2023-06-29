import { configureStore } from '@reduxjs/toolkit'
import userSlice from './authSlice'

export default configureStore({
    reducer: {
        user: userSlice
    }
})
