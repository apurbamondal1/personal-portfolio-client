import React from 'react';
import  './Home.css';
import images from '../Images/InShot_20230609_121501534.jpg';
const Home = () => {
    return (
        <div>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={images} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Hello...</h1>
      <p className="py-6">I am Apurba Mondal, a passionate junior web developer. I am a coding enthusiast, and I have a strong passion for computer science. I am currently a second-year student pursuing a Bachelor of Computer Applications at IGNOU University. I enjoy learning new technologies, and I am also quick to respond.</p>
     
    </div>
  </div>
</div>
         
          <h2 > wellcome to my portfolio</h2> 
         
        </div>
    );
};

export default Home;