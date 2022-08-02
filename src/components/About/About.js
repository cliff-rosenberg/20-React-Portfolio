import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './About.css'
import cliff from '../../images/cliff-headshot2-sm.jpg';

const About = () => {
    return (
        <Container>
            <Card>
                <Card.Img variant="top" className="img-fluid" src={cliff} />
            </Card>
        </Container>
        )
};

export default About;