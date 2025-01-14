import { useEffect, useState } from 'react'
import Post from '../components/Post'
import postInfo from '../db/data'
import '../css/Blog.css'

// React icons
import { FaSearch } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { FaQuestionCircle } from "react-icons/fa";

const Blog = () => {
    const [info, setInfo] = useState(postInfo)
    const [searchTerm, setSearchTerm] = useState('')
    const handleSearch = (e) => {
        e.preventDefault()
        const filteredPosts = postInfo.filter((post) =>
            post.author.toLowerCase().includes(searchTerm.toLowerCase()) 
        )
        setInfo(filteredPosts)
    }
    const onAddComment = (e) => {
        const updatedPosts = info.map((post) => {
            if (e) {
                return {...post, comments: [...post.comments, e] }
            }
            return post;
        })
        setInfo(updatedPosts)
    }
  return (
    <div className='content'>
        <div className='nav'>
            <img src="https://i.ibb.co/GvLWdFM/blogLogo.png" alt="logo image" className='logo'/>
            <form onSubmit={handleSearch}>
                <input className='search' type="text" placeholder="Search by author..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <button type="submit"><FaSearch size={40}/></button>
            </form>
        </div>
        <div className="flexContainer">
            {info.map((post)=> {
                return <Post key={new Date().getDate()} image={post.image} title={post.title} author={post.author} desc={post.desc} date={post.date} comments={post.comments} onAddComment={onAddComment}/>
            })}
        </div>
        <div className='footer'>
            <h4>FOLLOW US</h4>
            <a href=""><FaFacebook size={40} /></a>
            <a href=""><FaLinkedinIn size={40} /></a>
            <a href=""><FaTwitter size={40} /></a>
        </div>
    </div>
  )
}

export default Blog