import React from 'react'

function Posts({ posts, loading }) {

    if (loading) {
        return <h2>Loading...</h2>
    }

  return (
      <ul className='list-group mb-4'>
          {posts.map((post) => 
              <li key={post.id}>{post.title}</li> 
          )}
    </ul>
  )
}

export default Posts
