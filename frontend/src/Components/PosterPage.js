import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPosterAsync, selectPosts, selectProfileCreatedAt, selectProfileUsername } from "../Store/PostSlice";
import CreatePost from "./CreatePost";
import Poster from "./Poster";
import Posts from "./Posts";

export default function PosterPage() {
    const { username } = useParams();
    const profileUsername = useSelector(selectProfileUsername);
    const createdAt = useSelector(selectProfileCreatedAt);
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosterAsync(username));
    }, [username]);

    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <Container>
                        <Poster username={profileUsername} createdAt={createdAt} />
                    </Container>
                </Col>
                <Col sm={8} style={{ width: '36rem' }}>
                    <CreatePost />
                    <Posts posts={posts}/>
                </Col>
            </Row>
        </Container>
    );
}