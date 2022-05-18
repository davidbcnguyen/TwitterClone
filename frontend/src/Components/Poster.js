import { Button, Card } from "react-bootstrap";

export default function Poster({ username, createdAt }) {
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
    return (
        <Card>
            <Card.Title>{username}</Card.Title>
            <Card.Subtitle>{convertedTime}</Card.Subtitle>
            <Button>Follow</Button>
        </Card>
    );
}