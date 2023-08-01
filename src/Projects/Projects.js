import React from 'react';
import './Projects.css';
import Modal from 'react-modal';

const Projects = ({option}) => {
    const {image,name,live,description,technology,client,server} = option;
    const [isModalOpen, setModalOpen] = React.useState(false);
    return (

       
        <div className="card w-120 bg-base-100 shadow-xl">
          
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl image" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="card-actions">
          <button className='btn btn-accent live-link'><a href={live}>Live Link</a></button>
            {/* <button className="btn btn-accent">Github Link</button> */}
            {/* Open the modal using ID.showModal() method */}
             {/* Open the modal using state */}
          <button className="btn btn-accent" onClick={() => setModalOpen(true)}>Details with Links</button>
        </div>
      </div>
      {/* React Modal component */}
      <Modal isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)}>
        {/* <h3 className="font-bold text-lg">Hello!</h3> */}
        <p className="py-4 description">Welcome to {name}</p>
        <p className="py-4 description"><strong>Overview : </strong>{description}</p>
        <p className="py-4 description"><strong>Technology Used : </strong>{technology}</p>
        <p className="py-4 description"><strong>Client side Github : </strong>{client}</p>
        <p className="py-4 description"><strong>Server side Github : </strong>{server}</p>
       
        <div className="modal-action">
          {/* Close the modal */}
          <button className="btn" onClick={() => setModalOpen(false)}>Close</button>
        </div>
      </Modal>





          </div>
         
    );
};

export default Projects;