import React from "react";
import { useState } from "react";
import Navbar from "./navbar";
import ProfileCard from "./ProfileCard";
import 'bulma/css/bulma.css'
import image from './Images/img.avif'
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  const handleClick = () => {
    setPosts([...posts, image]);
  };

  const renderedPosts = posts.map((post, index) => {
    return <ProfileCard title='Project' owner='@Sid' image={post} description='Project hai!!' key={index} />;
  });

  return (
    <div>
      <div className="App"><Navbar /></div>
      <div className="container">
        <button className="button" onClick={handleClick}>Post</button>
        {/* <div className="post-list">{renderedPosts}</div> */}
        <section className="section">
          <div className="columns">
            <div className="column is-3">{renderedPosts}</div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
