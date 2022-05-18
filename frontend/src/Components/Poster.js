import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { follow, getFollowees, unfollow } from "../APIs/BackendCalls";

export default function Poster({ username, createdAt }) {
    const [followed, setFollowed] = useState(new Set());

    useEffect(() => {
        getFollowees()
            .then(({ data }) => setFollowed(new Set(data)))
            .catch(err => console.log(err))
    }, [username]);

    const convertedTime = new Date(createdAt).toLocaleDateString(
        "en-ca",
        {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }
    )

    const handleButtonClicked = () => {
        if (followed.has(username)) {
            unfollow(username)
            .then()
            .catch(error => console.log(error));
        } else {
            follow(username)
            .then()
            .catch(error => console.log(error));
        }
    }

    return (
        <Card>
            <Card.Title>{username}</Card.Title>
            <Card.Subtitle>{convertedTime}</Card.Subtitle>
            <Button onClick={handleButtonClicked}>{followed.has(username) ? "Unfollow" : "Follow"}</Button>
        </Card>
    );
}