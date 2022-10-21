import React, { useContext } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import LeftSideNav from './LeftSideNav';

const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <Navbar collapseOnSelect className='mb-4 shadow' expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand><Link to="/" style={{textDecoration: "none", color: 'black', fontWeight: "bold"}}>Dragon News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/" style={{ textDecoration: "none", color: 'black'}}>Home</Link></Nav.Link>
                            <Nav.Link><Link to="/" style={{ textDecoration: "none", color: 'black' }}>Regular News</Link></Nav.Link>
                            <Nav.Link><Link to="/" style={{ textDecoration: "none", color: 'black' }}>International News</Link></Nav.Link>
                            <NavDropdown title="Entertainment" id="collasible-nav-dropdown">
                                <NavDropdown.Item><Link to="/" style={{ textDecoration: "none", color: 'black' }}>Sports</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/" style={{ textDecoration: "none", color: 'black' }}>Entertainment</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/" style={{ textDecoration: "none", color: 'black' }}>Culture</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/" style={{ textDecoration: "none", color: 'black' }}>Arts</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link to="/" style={{ textDecoration: "none", color: 'black' }}>All News</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link><Link to="/" style={{ textDecoration: "none", color: 'black' }}>{user?.displayName && user.displayName}</Link></Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
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