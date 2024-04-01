import { useState, useEffect } from "react";
import axios from 'axios';


function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  useEffect(() => {
    
  }, [])
  

  return (
    <div className="container">
      
    </div>
  );
}

export default App;
