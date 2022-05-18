import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { login, register } from "../APIs/BackendCalls";

const initialState = {
    username: "",
    status: "idle"
};

export const loginAsync = createAsyncThunk(
    "poster/login",
    async ({ username, password }) => {
        const response = await login(username, password);
        return { username: username, token: response.data };
    }
);

export const registerAsync = createAsyncThunk(
    "poster/register",
    async (username, password) => {
        const response = await register(username, password);
        return { username: username, token: response.data };
    }
);

export const posterSlice = createSlice({
    name: "poster",
    initialState,
    reducers: {
        logout: (state) => {
            state.username = "";
            axios.defaults.headers.common["Authorization"] = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.username = action.payload.username;
                axios.defaults.headers.common["Authorization"] = action.payload.token;
            })
            .addCase(registerAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(registerAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.username = action.payload.username;
                axios.defaults.headers.common["Authorization"] = action.payload.token;
            })
    }
});

export const { logout } = posterSlice.actions;

export const selectUsername = (state) => state.poster.username;

export default posterSlice.reducer;