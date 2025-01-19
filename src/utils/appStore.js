import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import feedReducer from './feedSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
    },
});

console.log("Line 323", appStore.reducer)

export default appStore;