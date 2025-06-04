import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import './Contact.css'

const Contact = () => {
  const { User } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      name: data.name,
      email: data.email,
      message: data.message,
      userId: User?.uid || null,
    };

    try {
      const res = await fetch('https://personal-portal-backend.vercel.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
 Swal.fire({
  icon: 'success',
  title: 'Message sent!',
  text: 'Your message was sent successfully.',
  confirmButtonText: 'OK',
  confirmButtonColor: '#28a745',  
  showConfirmButton: true,
  customClass: {
    confirmButton: 'no-hover'
  }
});
  reset(); 
} else {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Failed to send message. Please try again later.',
    confirmButtonColor: '#d33'
  });
}
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Error occurred while sending message.");
    }
  };

  return (
    <div name='Contact' className='contacts parent' data-aos="fade-up" data-aos-duration="3000">
      <div className='h-[500px] flex justify-center items-center'>
        <div className='w-96 p-7'>
          <h2 className='text-xl text-center'>Contact Form</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Name</span></label>
              <input type="text" {...register("name")} className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="text" {...register("email")} className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Message</span></label>
              <textarea {...register("message")} className="textarea textarea-accent w-full max-w-xs" />
            </div>
            <br />
            <input className="btn btn-primary w-full" type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
