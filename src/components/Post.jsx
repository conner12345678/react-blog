import React from 'react'

const Post = ({title, author, desc, date}) => {
  return (
    <div className='container'>
        <img src="#" alt="post Image" className='image'/>
        <h3 className='title'>{title}</h3>
        <hr />
        <h5 className='author'>{author}</h5>
        <div className='desc'>
            <p className='descInfo'>{desc}</p>
        </div>
        <p className='date'>{date}</p>
        <a href="#"><img src="#" alt="comment button" /></a>
    </div>
  )
}

export default Post