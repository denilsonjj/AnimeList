import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/Nav.module.css"
const NavBar = () => {
    return (
        <div>
            <Navbar bg='light' text='white' expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Anime List
                    <img src="https://img.icons8.com/color/48/000000/naruto.png"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link  style={{color:'blueviolet'}} as={Link} to="/">Home</Nav.Link>
                            <Nav.Link style={{color:'blueviolet'}} as={Link} to='/Animes'>Animes</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar;