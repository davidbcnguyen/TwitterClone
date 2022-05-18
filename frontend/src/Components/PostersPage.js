import { useEffect, useState } from "react";
import { fetchPosters } from "../APIs/BackendCalls";
import Posters from "./Posters";

export default function PostersPage() {
    const [posters, setPosters] = useState([]);

    useEffect(() => {
        fetchPosters()
            .then(({ data }) => setPosters(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <Posters posters={posters} />
    );
}