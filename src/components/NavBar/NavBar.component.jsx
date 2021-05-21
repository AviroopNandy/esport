import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import logo from "../../assets/logo.png";

import "./NavBar.style.css";

const NavBar = () => {
    return(
        <>
            <Navbar fixed="top" variant="primary" className="navbar-custom">
                <Navbar.Brand href="#home" className="navbar-logo">
                    <img src={ logo } alt="logo" />
                    ESPORT
                    {/* <h3 className="navbar-brand-text">ESPORTS</h3> */}
                </Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#" className="nav-link-text">Home</Nav.Link>
                <Nav.Link href="#" className="nav-link-text">Stats</Nav.Link>
                <Nav.Link href="#" className="nav-link-text">How It Works</Nav.Link>
                <Nav.Link href="#" className="nav-link-text">Devs</Nav.Link>
                </Nav>
                <Button variant="primary">Play Now</Button>
            </Navbar>
        </>
    )
}

export default NavBar;