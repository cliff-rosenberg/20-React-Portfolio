import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './About.css'
import cliff from '../../images/cliff-headshot2-sm.jpg';

const About = () => {
    return (
        <Container fluid="md" className="bkgrd">
            <Row>
                <Col> 
                <Card border="dark" className="card-text">
                    <Card.Body className="text-wide">
                    <Card.Title>About Cliff</Card.Title>
                    <Card.Text>
                    Cliff is an Automation Technician with more than a decade of experience deploying and optimizing interconnected manufacturing systems. 
                    Cliff has consistently delivered value through curating business-critical data and implementing energy, material, and time-saving code optimizations for Allen Bradley automation systems. 
                    In addition, Cliff is currently studying full-stack software development (HTML, CSS, Node, JavaScript, React, MongoDB) at The University of Arizona and is interested in future career challenges.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                    <Card className="card-picture">
                        <Card.Img variant="top" className="img-fluid" src={cliff} />
                    </Card>
                </Col>
            </Row>
        </Container>
        )
};

export default About;