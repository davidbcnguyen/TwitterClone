import { ListGroup } from "react-bootstrap";
import Poster from "./Poster";

export default function Posters({ posters=[] }) {
    const posterCards = posters.map(p => <ListGroup.Item key={p.username} as={Poster} username={p.username} createdAt={p.createdAt} />)
    return (
        <ListGroup>
            {posterCards}
        </ListGroup>
    );
}