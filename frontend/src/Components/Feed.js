import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeedAsync, selectPosts } from "../Store/PostSlice";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

export default function Feed() {
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Feed"
        dispatch(fetchFeedAsync());
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