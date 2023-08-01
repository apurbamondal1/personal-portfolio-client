

import React from 'react';

import { FaLinkedin,FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';





const Footer = () => {
  


  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <div className="grid grid-flow-col gap-4">
   
    <a className="link link-hover"> Social Medias </a> 
  
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4" >
      <a href="https://www.linkedin.com/feed/"><FaLinkedin size="2rem" /></a>
         <a href="https://github.com/"><FaGithub size="2rem" /></a>
        
        {/* <Link to="https://www.linkedin.com/feed/"><FaLinkedin></FaLinkedin></Link> */}
    </div>
  </div> 
  <div>
    <p>Copyright © 2023 - All right reserved by Apurba Mondal</p>
  </div>
</footer>
    </div>
    
    
    

  );
};

export default Footer;
