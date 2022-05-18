import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import followReducer from './FollowSlice';
import posterReducer from './PosterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        poster: posterReducer,
        follow: followReducer
    },
});
