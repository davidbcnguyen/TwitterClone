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

export function fetchPoster(username) {
    return axios.get(`/poster/${username}`)
}