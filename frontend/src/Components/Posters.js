import { Col, Container, ListGroup, Row } from "react-bootstrap";
import Poster from "./Poster";

export default function Posters({ posters=[] }) {
    const posterCards = posters.map(p => <ListGroup.Item key={p.username} as={Poster} username={p.username} createdAt={p.createdAt} />);
    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        {posterCards}
                    </ListGroup>
                </Col>
                <Col sm={8}>
                </Col>
            </Row>
        </Container>
    );
}