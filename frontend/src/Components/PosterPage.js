import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchPoster } from "../APIs/BackendCalls";
import Poster from "./Poster";
import Posts from "./Posts";

export default function PosterPage() {
    const { username } = useParams();
    const [profile, setProfile] = useState({});

    useEffect(() => {
        fetchPoster(username)
            .then(({ data }) => {
                setProfile(data)})
            .catch(err => console.log(err))
    }, [username]);

    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <Container>
                        <Poster username={profile.username} createdAt={profile.createdAt} />
                    </Container>
                </Col>
                <Col sm={8}>
                    <Posts posts={profile.posts}/>
                </Col>
            </Row>
        </Container>
    );
}