import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import hawaii from '../../images/cliff-hawaii.png'

const Home = () => {
    return (
        <MDBContainer className="text-center vh-100 bkgrd">
            <div className="pt-4">
                <img src={hawaii} className='img-fluid rounded-pill shadow-4' alt='...' />
            </div>
            <div className="text-dark fs-1">Welcome to my portfolio page!</div>
        </MDBContainer>
    )
};

export default Home;