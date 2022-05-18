import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { fetchAllPosts } from "../APIs/BackendCalls";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

export default function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchAllPosts()
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