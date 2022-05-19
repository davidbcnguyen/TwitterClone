import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPostsAsync, selectPosts } from "../Store/PostSlice";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

export default function AllPosts() {
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "All Posts";
        dispatch(fetchAllPostsAsync());
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