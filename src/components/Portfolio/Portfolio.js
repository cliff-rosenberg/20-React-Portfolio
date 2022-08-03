import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { run as runHolder } from 'holderjs/holder';
import './Portfolio.css'

const Portfolio = () => {
    const cardsText = [
        {title: "Card 1", text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
        {title: "Card 2", text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
        {title: "Card 3", text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
        {title: "Card 4", text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
        {title: "Card 5", text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
        {title: "Card 6", text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
    ];
    const cardQuan = 6;// set to amount of objects in array

    useEffect(() => {
        runHolder('image-class-name');
    });
    return (
        <Container>
            <Row xs={1} md={3} className="g-4">
            {Array.from({ length: cardQuan }).map((_, idx) => (
                <Col key={idx}>
                    <Card className="portfolio-card">
                        <Card.Img variant="top" src="holder.js/320x240" />
                        <Card.Body>
                        <Card.Title>{cardsText[idx].title}</Card.Title>
                        <Card.Text>
                            {cardsText[idx].text}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </Container>
        )
};

export default Portfolio;