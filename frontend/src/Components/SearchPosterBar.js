import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function SearchPosterBar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleQueryChange = event => {
        setQuery(event.target.value);
    }

    const handleQuerySubmit = event => {
        event.preventDefault();
        navigate(`/poster/?query=${query}`);
        setQuery("");
    }

    return (
        <Form className="me-auto" onSubmit={handleQuerySubmit}>
            <FormControl type="search" placeholder="Search users" className="me-2" aria-label="Search" value={query} onChange={handleQueryChange}/>
        </Form>
    );
}