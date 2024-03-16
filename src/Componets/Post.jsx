/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Post = ({post}) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button>View Details</button>
        </div>
    )
}
export default Post;