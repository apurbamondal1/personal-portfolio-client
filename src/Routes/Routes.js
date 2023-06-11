import { createBrowserRouter } from "react-router-dom";
import Design from "../Home/Home";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

export const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      children: [
        // {
        //     path:'/',
        //     element:<Design></Design>
        // },
        // {
        //     path:'/footer',
        //     element:<Footer></Footer>
        //   }      
      ]
   
}
     
  ]);
  