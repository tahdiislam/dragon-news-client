import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import {FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp} from "react-icons/fa";

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
        </div>
    );
};

export default RightSideNav;