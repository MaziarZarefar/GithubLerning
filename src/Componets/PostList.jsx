// eslint-disable-next-line no-unused-vars
import React , {useState , useEffect} from "react";
import axios from 'axios';
import Post from './Post.jsx';

const PostList = () => {
  const [posts , setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      setPosts(response.data);
    })
    .catch(error => {
      console.error('Error fetching posts: ', error);
    });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
