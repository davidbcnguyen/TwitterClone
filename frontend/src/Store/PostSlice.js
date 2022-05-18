import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllPosts, fetchFeed, fetchPoster, submitPost } from "../APIs/BackendCalls";

const initialState = {
    username: "",
    createdAt: null,
    posts: [],
    status: "idle"
};

export const fetchAllPostsAsync = createAsyncThunk(
    "post/getAll",
    async () => {
        const response = await fetchAllPosts();
        return response.data;
    }
);

export const fetchFeedAsync = createAsyncThunk(
    "post/getFeed",
    async () => {
        const response = await fetchFeed();
        return response.data;
    }
);

export const fetchPosterAsync = createAsyncThunk(
    "post/getProfile",
    async (username) => {
        const response = await fetchPoster(username);
        return response.data;
    }
);

export const createPostAsync = createAsyncThunk(
    "post/create",
    async (body) => {
        const response = await submitPost(body);
        return response.data;
    }
);

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllPostsAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAllPostsAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.posts = action.payload;
                state.username = "";
                state.createdAt = null;
            })
            .addCase(fetchFeedAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchFeedAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.posts = action.payload.posts;
                state.username = "";
                state.createdAt = null;
            })
            .addCase(fetchPosterAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPosterAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.posts = action.payload.posts;
                state.username = action.payload.username;
                state.createdAt = action.payload.createdAt;
            })
            .addCase(createPostAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createPostAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.posts.unshift(action.payload);
            })
    }
});

export const selectProfileUsername = (state) => state.post.username;
export const selectProfileCreatedAt = (state) => state.post.createdAt;
export const selectPosts = (state) => state.post.posts;

export default postSlice.reducer;