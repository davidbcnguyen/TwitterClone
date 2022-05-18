import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { follow, getFollowees, unfollow } from "../APIs/BackendCalls";

const initialState = {
    followees: {},
    followers: {},
    status: "idle"
};

export const fetchFolloweesAsync = createAsyncThunk(
    "/follow/getFollowees",
    async () => {
        const response = await getFollowees();
        return response.data;
    }
);

export const addFollowAsync = createAsyncThunk(
    "follow/addFollow",
    async (username) => {
        await follow(username);
        return username;
    }
)

export const removeFollowAsync = createAsyncThunk(
    "follow/removeFollow",
    async (username) => {
        await unfollow(username);
        return username;
    }
)

export const followSlice = createSlice({
    name: "follow",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFolloweesAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchFolloweesAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.followees = {};
                action.payload.forEach(name => {
                    state.followees[name] = true;
                });
            })
            .addCase(addFollowAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addFollowAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.followees[action.payload] = true;
            })
            .addCase(removeFollowAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(removeFollowAsync.fulfilled, (state, action) => {
                state.status = "idle";
                delete state.followees[action.payload];
            })
    }
});

export const selectFollowees = (state) => state.follow.followees;
export const selectFollowers = (state) => state.follow.followers;

export default followSlice.reducer;