import React from 'react';
import { 
    MDBContainer, 
    MDBRow, 
    MDBCard, 
    MDBCol, 
    MDBCardBody, 
    MDBCardTitle, 
    MDBCardText,
    MDBCardLink, 
    MDBCardImage,
    MDBCardFooter
    } from 'mdb-react-ui-kit';

import card1Img from '../../images/weather-forecast-sm.png'
import card2Img from '../../images/acme-invoicer-sm.png'
import card3Img from '../../images/streaming-searcher-sm.png'
import card4Img from '../../images/tech-blog-mvc-sm.png'
import card5Img from '../../images/text-editor-pwa-sm.png'
import card6Img from '../../images/workday-scheduler-sm.png'
import './Portfolio.css'

const Portfolio = () => {
    
    return (
        <MDBContainer fluid className="h-100 pb-4 bkgrd">
            <MDBRow className="row-cols-1 row-cols-md-3 g-3 pt-2">
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card1Img} />
                        <MDBCardBody>
                        <MDBCardTitle>Weather Forecast Dashboard</MDBCardTitle>
                        <MDBCardText>
                            A "weather dashboard" app that takes a city name and returns weather data from the OpenWeather API. Uses the Bulma.io CSS framework for page styling.
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/cliff-rosenberg/06-Weather_Dashboard'>Repository link</MDBCardLink>
                        <MDBCardLink href='https://cliff-rosenberg.github.io/06-Weather_Dashboard/'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card2Img} />
                        <MDBCardBody>
                        <MDBCardTitle>Business Invoice App</MDBCardTitle>
                        <MDBCardText>
                            A customer management and inventory management system with invoice billing functions using the "Model-View-Controller" concept.
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/cliff-rosenberg/Acme-Invoicer'>Repository link</MDBCardLink>
                        <MDBCardLink href='https://pacific-beach-42504.herokuapp.com/'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card3Img} />
                        <MDBCardBody>
                        <MDBCardTitle>Online Streaming Searcher</MDBCardTitle>
                        <MDBCardText>
                            This web app is used for searching movies by title name and finding a source to stream or buy them from using API calls.

                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/cliff-rosenberg/Streaming-Project'>Repository link</MDBCardLink>
                        <MDBCardLink href='https://cliff-rosenberg.github.io/Streaming-Project/'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBRow className="row-cols-1 row-cols-md-3 g-3 pt-2">
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card4Img} />
                        <MDBCardBody>
                        <MDBCardTitle>Tech Blog</MDBCardTitle>
                        <MDBCardText>
                            A simple Tech Blog using the Model-View-Controller format. A MySQL database is used to store User data, as well as Posts and Comments on those Posts.
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/cliff-rosenberg/14-MVC-Tech-Blog'>Repository link</MDBCardLink>
                        <MDBCardLink href='https://mysterious-sea-13726.herokuapp.com/'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card5Img} />
                        <MDBCardBody>
                        <MDBCardTitle>Simple Text Editor</MDBCardTitle>
                        <MDBCardText>
                            A Progressive Web Application using JavaScript, Webpack and Workbox to create a simple text editor.
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/cliff-rosenberg/19-Text-Editor-PWA'>Repository link</MDBCardLink>
                        <MDBCardLink href='https://jate-app-v1.herokuapp.com/'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card6Img} />
                        <MDBCardBody>
                        <MDBCardTitle>Workday Scheduler</MDBCardTitle>
                        <MDBCardText>
                            A simple workday scheduler app using HTML, CSS and JavaScript. Data persistence is provided by the local storage API of the browser.
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/cliff-rosenberg/05-Work_Day_Scheduler'>Repository link</MDBCardLink>
                        <MDBCardLink href='https://cliff-rosenberg.github.io/05-Work_Day_Scheduler/'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        )
};

export default Portfolio;