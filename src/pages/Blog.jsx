import Post from '../components/Post'
import postInfo from '../db/data'
import '../css/Blog.css'
import { FaSearch } from "react-icons/fa";

const blog = () => {
  return (
    <div className='content'>
        <div className='nav'>
            <img src="https://i.ibb.co/GvLWdFM/blogLogo.png" alt="logo image" className='logo'/>
            <form action="#">
                <input type="text" placeholder="Search..."/>
                <button type="submit"><FaSearch size={50} /></button>
            </form>
        </div>
        <div className="flexContainer">
            {postInfo.map((post)=> {
                return <Post img={post.img} title={post.title} author={post.author} desc={post.desc} date={post.date}/>
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

export default blog