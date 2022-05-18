import { configureStore } from '@reduxjs/toolkit';
import followReducer from './FollowSlice';
import posterReducer from './PosterSlice';
import postSlice from './PostSlice';

export const store = configureStore({
    reducer: {
        poster: posterReducer,
        follow: followReducer,
        post: postSlice
    },
});
