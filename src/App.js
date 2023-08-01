import {RouterProvider} from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Skill from './Skill/Skill';

import Footer from './Footer/Footer';
import Contact from './Login/Contact';
import Project from './Projects/Project';
import Resume from './Home/Resume';



function App() {

  return (
  <div data-theme="dark">
   
    {/* <RouterProvider router = {router}></RouterProvider> */}
    <Navbar></Navbar>
    <Home></Home>
    
    <Skill></Skill>
    <Project></Project>
    <Contact></Contact>
    {/* <Resume></Resume> */}
    <Footer></Footer>
    
    
    
   
  </div>
  

    
  );
}

export default App;
