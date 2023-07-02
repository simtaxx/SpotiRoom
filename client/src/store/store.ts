import { configureStore } from '@reduxjs/toolkit'
import loadingSlice from './loadingSlice'
import errorsSlice from './errorsSlice'

export default configureStore({
    reducer: {
        loading: loadingSlice,
        errors: errorsSlice
    }
})
