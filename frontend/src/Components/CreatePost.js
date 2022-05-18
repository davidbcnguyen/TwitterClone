import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createPostAsync } from "../Store/PostSlice";

export default function CreatePost() {
    const dispatch = useDispatch();

    const maxLength = 250;
    const [text, setText] = useState("");

    const handleTyping = event => {
        setText(event.target.value.substring(0, maxLength));
    }

    const handleSubmit = () => {
        dispatch(createPostAsync(text));
        setText("");
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>Create a new Post</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formTextarea">
                        <Form.Control as="textarea" rows={3} value={text} onChange={handleTyping}/>
                        <Form.Text id="characterCounter">{text.length} / {maxLength}</Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}