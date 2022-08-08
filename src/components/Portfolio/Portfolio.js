import React, { useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCard, MDBCol, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
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
        <MDBContainer breakpoint="sm" className="vh-100 bkgrd">
            <MDBRow className="g-4 pt-2">
            {Array.from({ length: cardQuan }).map((_, idx) => (
                <MDBCol key={idx}>
                    <MDBCard className="portfolio-card">
                        <MDBCardImage className="rounded mx-auto pt-2" position="top" src="holder.js/320x240" />
                        <MDBCardBody>
                        <MDBCardTitle>{cardsText[idx].title}</MDBCardTitle>
                        <MDBCardText>
                            {cardsText[idx].text}
                        </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            ))}
            </MDBRow>
        </MDBContainer>
        )
};

export default Portfolio;