import React from 'react'
import css from "./css/PostItem.module.css";

function PostItem(props) {
    
  return (

        props.posts.map(post => {
                    return (
                    <div key={post.title} className={css.SearchItem}>
                        <p>Title: {post.title}</p>
                        <p>Artist: {post.name}</p>
                        <img src={post.image}></img>
                        <p>Description: {post.description}</p>
                    </div>
                    )
                })
    
  )
}

export default PostItem