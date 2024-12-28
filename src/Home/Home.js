import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  './Home.css';
import { pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Home = ({ }) => {

  useEffect(() => {
    AOS.init();
  }, []);

  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1dSI22XvruV_UQzhHfHtux8lJ76-o5Rm9/view?usp=drive_link', '_target');
  };


const image = "https://i.ibb.co/xC9Dcmw/In-Shot-20230609-121501534.jpg";
    return (
        
        <div className='hero' name= 'home'  data-aos="fade-up" data-aos-duration="3000">
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} alt=''className="rounded-lg w-1/2 lg:w-1/4 shadow-2xl "  />
    <div>
      <h1 className="text-5xl font-bold">Hello...</h1>
      <p className="py-6">I am Apurba Mondal, a passionate junior web developer. I am a coding enthusiast, and I have a strong passion for computer science. I am currently a second-year student pursuing a Bachelor of Computer Applications at IGNOU University. I enjoy learning new technologies, and I am also quick to respond.</p>
      {/* <button className='btn btn-info' onClick={handleDownload}>Resume</button> */}
      <button className='btn btn-info'>Hire Me</button>
    </div>
  </div>
</div>
  </div>
    );
};

export default Home;