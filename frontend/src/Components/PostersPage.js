import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchPosters, searchPosters } from "../APIs/BackendCalls";
import Posters from "./Posters";

export default function PostersPage() {
    const [posters, setPosters] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.has("query")) {
            searchPosters(searchParams.get("query"))
                .then(({ data }) => setPosters(data))
                .catch(err => console.log(err));
        } else {
            fetchPosters()
                .then(({ data }) => setPosters(data))
                .catch(err => console.log(err));
        }
    }, [searchParams]);

    return (
        <Posters posters={posters} />
    );
}