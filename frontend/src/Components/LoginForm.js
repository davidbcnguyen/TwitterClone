import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

export default function LoginForm({ text, submitFunction }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = event => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const handleSubmit = () => {
        submitFunction(username, password);
        setPassword("");
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>{text}</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Control type="text" value={username} placeholder="Enter username" onChange={handleUsernameChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Control type="password" value={password} placeholder="Password" onChange={handlePasswordChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">{text}</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}