import React from 'react';
import  './Banner.css';
import { pdfjs, Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Banner = ({ resumeUrl }) => {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/10lf9ZMBX9kNrhmi9q0w97cvAqa9EU4Pd/view', '_target');
  };

const image = "https://i.ibb.co/xC9Dcmw/In-Shot-20230609-121501534.jpg";
    return (
       
        <div >
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Hello...</h1>
      <p className="py-6">I am Apurba Mondal, a passionate junior web developer. I am a coding enthusiast, and I have a strong passion for computer science. I am currently a second-year student pursuing a Bachelor of Computer Applications at IGNOU University. I enjoy learning new technologies, and I am also quick to respond.</p>
      <button className='btn btn-info' onClick={handleDownload}>Resume</button>
      <button className='btn btn-primary hire-button'>Hire Me</button>
      <button className='btn btn-primary hire-button'>Hire Me</button>
      <button className='btn btn-primary hire-button'>Hire Me</button>
    </div>
  </div>
</div>
  </div>
    );
};

export default Banner;