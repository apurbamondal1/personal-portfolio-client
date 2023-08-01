import React, { useContext } from 'react';
import './Contact.css';
import { useForm } from "react-hook-form";
import { AuthContext } from '../AuthProvider/AuthProvider';

const Contact = () => {
  const{User}= useContext(AuthContext)
    const {register,handleSubmit} = useForm();
    const handleLogin = data =>{
        console.log(data);
        // createUser(data.email,data.name)
        // .then(result => {
        //   const user = result.user;
        //   console.log(user)
        // })
        // .then(err => console.error(err));
        
if (User !== null) {
  console.log(User)
  // The User object has basic properties such as display name, email, etc.
  const displayName = User.data.name;
  const email = User.data.email;
 

  // The User's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = User.uid;
}
    }


    return (
        <div name='Contact'  className=' contacts parent'>
                 <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Contact Form</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input type="text"{...register("name")} className="input input-bordered w-full max-w-xs" />
  </div>
        <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input type="text"{...register("email")} className="input input-bordered w-full max-w-xs" />
  </div>
        <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Message</span>
  </label>
  <textarea type="text"{...register("message")} class="textarea textarea-accent" />
  </div>

       <br></br> <input className="btn btn-primary w-full" type="Submit" Value="Send Messagee" />
  
  
      </form>
      </div>
      </div>
       
        </div>
    );
};

export default Contact;
