import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        <Card>
            <Card.Body>
                <Card.Title>
                    <Link to={`/poster/${author}`}>{author}</Link>
                </Card.Title>
                <Card.Subtitle>{convertedTime}</Card.Subtitle>
                <Card.Text>{body}</Card.Text>
                <Button><i className="bi bi-shift"></i><i className="bi bi-shift-fill"></i> 100</Button>
            </Card.Body>
        </Card>
    );
}