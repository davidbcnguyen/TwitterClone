import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/api";
axios.defaults.headers.common["Authorization"] = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYXZpZCIsImV4cCI6MTY1MzY0MTkwMH0.9koPTzVhzO91oBMFtEyZw-pHlssAjCZ61rm3Pd1lsf5di7KtmEUjkemR6zM4Wwl5CY8xdsWOsX7tn4YWg79Onw";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

export function fetchAllPosts() {
    return axios.get("/post");
}

export function fetchFeed() {
    return axios.get("/post/feed");
}

export function fetchPosters() {
    return axios.get("/poster");
}

export function searchPosters(username) {
    return axios.get(`/poster?query=${username}`);
}

export function fetchPoster(username) {
    return axios.get(`/poster/${username}`)
}

export function submitPost(body) {
    return axios.post(`/post`, { body });
}

export function getFollowees() {
    return axios.get('/poster/follow');
}

export function follow(username) {
    return axios.post(`/poster/follow`, { followee_name: username });
}

export function unfollow(username) {
    return axios.delete(`/poster/follow`, { data: { followee_name: username } });
}

export function login(username, password) {
    return axios.post("/poster/login", { username, password });
}

export function register(username, password) {
    return axios.post("/poster", { username, password });
}

export function relog(token) {
    return axios.get("/poster/relog", { headers: { Authorization: token } });
}