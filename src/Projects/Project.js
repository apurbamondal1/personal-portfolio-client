import React, { useEffect, useState } from 'react';
import Projects from './Projects';
import './project.css'


const Project = () => {
     const [project, setProject] = useState([]);

       useEffect(() => {
        fetch('UserData.json')
            .then(res => res.json())
            .then(data => setProject(data))
           
    }, [])
    console.warn( "project", project)
    return (
       <div className='mt-16' data-aos="fade-up" data-aos-duration="3000">
        <div className='text-center'>
        {/* <h5 className='projects lg:hidden text-align-ce'>Projects</h5> */}
        <h5 className='text-xl font-bold text-secondary uppercase'>Projects</h5>
        {/* <div className="flex flex-col w-full"> */}
        </div>
{/* 
  <div className="divider"></div>  */}
 
{/* </div> */}
        <div name="projects" className='project  
        grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-primary '>
            
           {
            project.map(option =><Projects key={option.id} option ={option} ></Projects>)
           }
        </div>
        </div>
    );
};

export default Project;