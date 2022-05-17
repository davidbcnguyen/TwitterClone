import { Card } from "react-bootstrap";

export default function Post({ author, body, createdAt }) {
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
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{author}</Card.Title>
                <Card.Subtitle>{convertedTime}</Card.Subtitle>
                <Card.Text>{body}</Card.Text>
            </Card.Body>
        </Card>
    );
}