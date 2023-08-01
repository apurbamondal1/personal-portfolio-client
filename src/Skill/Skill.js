
import './Skill.css'

const Skill = () => {
   
    
    return (
       
       <div className='mt-16'  name= "skill" >
       <div className='text-center mb-8'>
        <h5 className='text-xl font-bold text-secondary uppercase'>My Skills</h5>
        </div>
        <div className='main'>
        <div className='fronted'>
           <div className='parametre'>
           HTML
            <input type="range" min={0} max="100" value="80" className="range range-info" />
           </div>
           <div className='parametre mt-5'>
            CSS
            <input type="range" min={0} max="100" value="80" className="range range-info" />
            </div>
            <div className='parametre mt-5'>
            Bootstrap
            <input type="range" min={0} max="100" value="80" className="range range-info" />
            </div>
            <div className='parametre mt-5'>
            Tailwind
            <input type="range" min={0} max="100" value="80" className="range range-info" />
            </div>
           <div className='parametre mt-5'>
           Daisy UI
            <input type="range" min={0} max="100" value="80" className="range range-info" />
           </div>
            <div className='parametre mt-5'>
            javascript
            <input type="range" min={0} max="100" value="80" className="range range-info" />
            </div>
           
        </div>
        <div className=''>
        <div className='parametre'>
             React Vite
            <input type="range" min={0} max="100" value="80" className="range range-info" />
            </div>
            <div className='parametre mt-5'>
            Node.js
            <input type="range" min={0} max="100" value="80" className="range range-info" />
            </div>
            <div className='parametre mt-5'>
            Express js
            <input type="range" min={0} max="100" value="80" className="range range-info" />
            </div>
            <div className='parametre mt-5' >
            Firebase
            <input type="range" min={0} max="100" value="80" className="range range-info" />
            </div>
            <div className='parametre mt-5' >
            Github
            <input type="range" min={0} max="100" value="80" className="range range-info" />
            </div>
            <div className='parametre mt-5' >
            MS Office
            <input type="range" min={0} max="100" value="80" className="range range-info" />
            </div> 
        </div>
        </div>
        </div>
      
   
    );
};

export default Skill;