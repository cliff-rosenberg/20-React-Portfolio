import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';

const Resume = () => {
    const pdfUrl = 'https://www.dropbox.com/s/9gg4m98v8e5vxhn/Cliff_Rosenberg_Resume.pdf?raw=1'
    return (
        <MDBContainer className="bkgrd">
            {/* stored at "https://www.dropbox.com/s/9gg4m98v8e5vxhn/Cliff_Rosenberg_Resume.pdf?raw=1" */}
            <object data={pdfUrl} type="application/pdf" width="100%" height="100%">
                <iframe src={pdfUrl} title="Cliff Rosenberg Resume" width="100%" height="100%" style={{ border: "none" }}>
                This browser does not support PDFs. Please download the PDF to view it: 
                <a href={pdfUrl}>Download PDF</a>
                </iframe>
            </object>          
        </MDBContainer>
    )
};

export default Resume;