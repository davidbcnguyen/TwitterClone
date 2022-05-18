import { ListGroup } from "react-bootstrap";
import NoPosts from "./NoPosts";
import Post from "./Post";

export default function Posts({ posts=[] }) {
    const postCards = posts.map(p => <ListGroup.Item key={p.id} as={Post} author={p.author} body={p.body} createdAt={p.createdAt} />)
    const toRender = posts.length > 0 ? <ListGroup>{postCards}</ListGroup> : <NoPosts />;
    return (toRender);
}