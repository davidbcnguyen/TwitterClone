import { useEffect, useState } from "react";
import { fetchAllPosts } from "../APIs/BackendCalls";
import Posts from "./Posts";

export default function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchAllPosts()
            .then(({ data }) => setPosts(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <Posts posts={posts} />
    );
}