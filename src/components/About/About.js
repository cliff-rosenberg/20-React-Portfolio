import React from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import './About.css'
import cliff from '../../images/cliff-headshot2-sm.jpg';

const About = () => {
    return (
        <MDBContainer fluid className="vh-100 bkgrd">
            <div className="d-flex justify-content-center flex-column flex-sm-row">

                <MDBCard className="order-sm-2 card-picture my-4 mx-auto mx-sm-0">
                    <MDBCardImage variant="top" className="img-fluid rounded" src={cliff} />
                </MDBCard>
                
                <MDBCard border="dark" className="order-sm-1 my-4 card-text mx-auto mx-sm-0">
                    <MDBCardBody>
                    <MDBCardTitle>About Cliff</MDBCardTitle>
                    <MDBCardText>
                    Cliff is an Automation Technician with more than a decade of experience deploying and optimizing interconnected manufacturing systems. 
                    Cliff has consistently delivered value through curating business-critical data and implementing energy, material, and time-saving code optimizations for Allen Bradley automation systems. 
                    In addition, Cliff is currently studying full-stack software development (HTML, CSS, Node, JavaScript, React, MongoDB) at The University of Arizona and is interested in future career challenges.
                    </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </MDBContainer>
    )
};

export default About;