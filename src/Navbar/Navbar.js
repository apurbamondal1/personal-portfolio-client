import React from 'react';
import "./Navbar.css";
import {Link} from 'react-scroll';

const Navbar = () => {
  
  // const  menuitems = <>
  // <li><Link to=""  >Home</Link></li>
  // <li><Link to="" >About</Link></li>
  // <li><Link to="" >Skills</Link></li>
  // <li><Link to="" >Contact</Link></li>
  
  
  // </>
const links = [
  {
    id:1,
    link:"home"
  },
  {
    id:2,
    link:"projects"
  },
  // {
  //   id:3,
  //   link:"Resume"
  // },
  {
    id:4,
    link:"skill"
  },
  {
    id:5,
    link:"Contact"
  },
]

    return (
        <div className='flex justify-between items-centre w-full h-20 px-4 text-white bg-black navbar fixed'>
          <div>
            <h1 className='text-2xl'> Apurba</h1>
          </div>

            {/* <div className="navbar bg-base-100">
  <div className="navbar-start">
    // <div className="dropdown">
    //   <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    //   </label>
    //   <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    //     {menuitems}
    //   </ul>
    // </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {menuitems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div> */}

<a href='https://drive.google.com/file/d/1j7rYGvPPDpiwP3TgmsPcUyHwc9v_RLmX/view?usp=drive_link'><button className='btn btn-primary ml-20 lg:hidden'>Resume</button></a>
    <div className='dropdown' >
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
       </label>
<ul  tabIndex={0} className=' menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
  {links.map(({link ,id}) =>{
    return(
 <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 '>

<Link to={link} smooth duration={500}>{link}</Link>
</li>)
  })}
 
</ul>
</div>


    <div className="navbar-center hidden lg:flex ml-80 pl-60" >
<ul className="menu menu-horizontal px-1">
  {links.map(({link ,id}) =>{
    return(
 <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 '>

<Link to={link} smooth duration={500}>{link}</Link>
</li>)
  })}
 
</ul>
</div>
<a href='https://drive.google.com/file/d/1dSI22XvruV_UQzhHfHtux8lJ76-o5Rm9/view?usp=drive_link'><button className='hidden lg:block button btn btn-accent'>Resume</button></a>

        </div>
    );
};

export default Navbar;


