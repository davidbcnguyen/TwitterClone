import { useEffect, useState } from "react";
import { fetchFeed } from "../APIs/BackendCalls";
import Posts from "./Posts";

export default function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchFeed()
            .then(({ data }) => setPosts(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <Posts posts={posts} />
    );
}