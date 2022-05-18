import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { fetchFeed } from "../APIs/BackendCalls";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

export default function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchFeed()
            .then(({ data }) => setPosts(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <Container>
            <Row>
                <Col sm={4}></Col>
                <Col sm={8} style={{ width: '36rem' }}>
                    <CreatePost />
                    <Posts posts={posts} />
                </Col>
            </Row>
        </Container> 
    );
}