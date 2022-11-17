import { Post } from "../Posts/Post"
import "./Bookmark.css"

export const Bookmark = (props) => {
    return(
        <div style={props.style} className="Bookmark">
            <h1 style={props.style} className="bookmark-text">
                Bookmarks
            </h1>
            <div className="empty">

            </div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}