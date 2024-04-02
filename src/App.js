import { useState, useEffect } from "react";
import axios from 'axios';
import Posts from "./components/Posts";


function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts();
  }, [])
  
  const indexOfLastPost = postsPerPage * currentPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-4">Blog Posts</h1>
      <Posts posts={currentPosts} loading={loading} />
    </div>
  );
}

export default App;
