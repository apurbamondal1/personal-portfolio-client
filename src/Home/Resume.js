// import React from 'react';
// import './Resume.css'
// import { pdfjs} from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// const Resume = () => {
//     const handleDownload = () => {
//         window.open('https://drive.google.com/file/d/1j7rYGvPPDpiwP3TgmsPcUyHwc9v_RLmX/view?usp=drive_link', '_target');
//         // window.open('https://drive.google.com/file/d/12EmdnuKM8FIvUxAeNX51YV-zyZubz6z1/view?usp=drive_link', '_target');
//       };
//     return (
//         <div name='Resume' className='button'>
//             <button className='btn btn-info' onClick={handleDownload}>Resume</button>
//         </div>
//     );
// };

// export default Resume;
import React from 'react';

const Resume = () => {
    return (
        <div name='Resume'>
            <a href='https://drive.google.com/file/d/1dSI22XvruV_UQzhHfHtux8lJ76-o5Rm9/view?usp=drive_link'></a>
        </div>
    );
};

export default Resume;