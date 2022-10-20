import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import LeftSideNav from './LeftSideNav';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Dragon News</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Breaking News</Nav.Link>
                            <Nav.Link href="#pricing">Regular News</Nav.Link>
                            <Nav.Link href="#pricing">International News</Nav.Link>
                            <NavDropdown title="Entertainment" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Sports</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Entertainment
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Culture</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Arts</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.5">
                                    All News
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {/* <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link> */}
                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideNav/>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;