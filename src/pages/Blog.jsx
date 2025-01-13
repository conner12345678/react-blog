import { useEffect, useState } from 'react'
import Post from '../components/Post'
import postInfo from '../db/data'
import '../css/Blog.css'
import { FaSearch } from "react-icons/fa";

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
                return <Post image={post.image} title={post.title} author={post.author} desc={post.desc} date={post.date}/>
            })}
        </div>
        <div className='footer'>
            <h4>FOLLOW US</h4>
            <ul>
                <li><a href="#"><img src="#" alt="facebook" /></a></li>
                <li><a href="#"><img src="#" alt="Instagram" /></a></li>
                <li><a href="#"><img src="#" alt="Twitter" /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Blog