import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import {FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp} from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../assets/brands/Brand1.jpg'
import Brand2 from '../assets/brands/Brand2.png'

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle /> Log in with Google</Button>
                <Button variant="outline-dark"><FaGithub /> Log in with GitHub</Button>
            </ButtonGroup>
            <div className="mt-3 mb-2">
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch/> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp/> Whatsapp</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Brand1}
                            alt="First slide"
                            height={150}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Brand2}
                            alt="Second slide"
                            height={150}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default RightSideNav;