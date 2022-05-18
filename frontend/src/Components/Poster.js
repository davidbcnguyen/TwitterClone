import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFollowAsync, fetchFolloweesAsync, removeFollowAsync, selectFollowees, selectFollowers } from "../Store/FollowSlice";
import { selectUsername } from "../Store/PosterSlice";

export default function Poster({ username, createdAt }) {
    const currentLogin = useSelector(selectUsername);
    const followees = useSelector(selectFollowees);
    const followers = useSelector(selectFollowers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFolloweesAsync())
    }, []);

    const convertedTime = new Date(createdAt).toLocaleDateString(
        "en-ca",
        {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }
    )

    const handleButtonClicked = () => {
        if (followees[username] === true) {
            dispatch(removeFollowAsync(username))
        } else {
            dispatch(addFollowAsync(username))
        }
    }

    return (
        <Card>
            <Card.Title>
                <Link to={`/poster/${username}`}>{username}</Link>
            </Card.Title>
            <Card.Subtitle>Joined on {convertedTime}</Card.Subtitle>
            {followers[username] === true ? <Card.Text>Follows you</Card.Text> : null}
            <Button onClick={handleButtonClicked} disabled={currentLogin === username}>
                {followees[username] === true ? 
                    <div><i className="bi bi-bookmark-fill"></i> Followed</div> : 
                    <div><i className="bi bi-bookmark"></i> Follow</div>}
            </Button>
        </Card>
    );
}