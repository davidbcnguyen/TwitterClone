import { ListGroup } from "react-bootstrap";
import Post from "./Post";

export default function Posts({ posts }) {
    const postCards = posts.map(p => <ListGroup.Item key={p.id} as={Post} author={p.author} body={p.body} createdAt={p.createdAt} />)
    return (
        <ListGroup>
            {postCards}
        </ListGroup>
    );
}