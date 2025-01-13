import React from 'react'
import '../css/Post.css'
import { FaCommentDots } from "react-icons/fa";

const Post = ({image, title, author, desc, date}) => {
  return (
    <div className='container'>
        <img src={image} alt="post" className='image'/>
        <div className="postContent">
          <h3 className='title'>{title}</h3>
          <hr />
          <h5 className='author'>{author}</h5>
          <div className='desc'>
              <p className='descInfo'>{desc}</p>
          </div>
          <div className="lowerContent">
            <p className='date'>{date}</p>
            <a href="">
              <FaCommentDots size={25}/>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Post