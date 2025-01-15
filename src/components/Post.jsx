import { useState } from 'react';
import '../css/Post.css';
import { FaCommentDots } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const Post = ({ image, title, author, desc, date, comments, onAddComment }) => {
  const [bool, setBool] = useState(false); // Manage comment section visibility
  const [theComment, setTheComment] = useState(''); // Manage input for new comment

  const handleSubmit = (e) => {
    e.preventDefault();
    if (theComment.trim() !== "") {
      onAddComment(theComment); // Pass new comment to parent
      setTheComment(''); // Clear input field
    }
  };

  return (
    <div className="container">
      <img src={image} alt="post" className="image" />
      <div className="postContent">
        <h3 className="title">{title}</h3>
        <hr />
        <h5 className="author">{author}</h5>
        <div className="desc">
          <p className="descInfo">{desc}</p>
        </div>
        <div className="lowerContent">
          <p className="date">{date}</p>
          <a title='Comments' onClick={() => setBool(!bool)} style={{ cursor: "pointer" }}>
            <FaCommentDots size={25} />
          </a>
        </div>
      </div>
          {bool && (
            <div className="comments">
              <h6>Comments</h6>
              <hr />
              <ul>
                {comments.map((comment, index) => (
                  <div className="com" key={index}>
                    {console.log(comment)}
                    <li>{comment}</li>
                  </div>
                ))}
              </ul>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your comment..."
                  value={theComment}
                  onChange={(e) => setTheComment(e.target.value)}
                />
                <button type="submit" title='Sumbit'><FaArrowDown size={25}/></button>
              </form>
            </div>
          )}
    </div>
  );
};

export default Post;
