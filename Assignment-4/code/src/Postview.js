import React,{useState,useEffect} from 'react';
import './Postview.css';
import axios from "axios"
const Postview = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3004/user').then((res) =>setPost(res.data)
    );
  }, []);
  return (
    <div className="parent">
      <div className="header1">
        <span>
          <img
            src={
              'https://cdn1.iconfinder.com/data/icons/unigrid-religion/60/008_019_spiral_universe_world_growth-512.png'
            }
            alt="logo"
          ></img>
        </span>
        <h2>Instaclone</h2>
        <img
          className="float-right"
          src={'https://cdn.onlinewebfonts.com/svg/img_367324.png'}
          alt="camera pic"
        ></img>
      </div>
      {posts.map((post, idx) => {
        return (
          <div className="posts-insta">
            <div className="person-details">
              <strong>{post.name}</strong>
              <span>...</span>
              <p>{post.location}</p>
            </div>
            <img
              class="single-img"
              src={post.PostImage}
              width="100"
              height="100"
            ></img>
            <div className="post-intrests">
              <img
                width="15"
                height="15"
                alt='likes image'
                src={
                  'https://th.bing.com/th/id/R.e05c207d9b5aa8568ef2567265aa6b52?rik=tuO91Ct5JKKjYA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_179765.png&ehk=mGfk3a1G5eMIs536NcU2f3bCGKPQxx6%2bkFckhXZxRR8%3d&risl=&pid=ImgRaw&r=0'
                }
              ></img>
              <img
                width="20"
                height="18"
                alt='share button'
                src={
                  'https://cdn3.iconfinder.com/data/icons/instagram-18/512/182_Instagram_Sets_Share-512.png'
                }
              ></img>
              <span className="date">{post.date}</span>
              <p>{post.likes} likes</p>
              <h3>{post.description}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Postview;
