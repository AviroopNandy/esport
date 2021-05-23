import React from "react";
import  { useHistory, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import logo from "../../assets/logo.png";

import "./NavBar.style.css";

const NavBar = () => {
    const history = useHistory();

    const redirectToHome = () => {
        history.push("/");
    }

    const redirectToDevs = () => {
        history.push("/devs");
    }
    return(
        <>
            <Navbar fixed="top" variant="primary" className="navbar-custom">
                <Navbar.Brand href="#home" className="navbar-logo">
                    <img src={ logo } alt="logo" />
                    ESPORT
                    {/* <h3 className="navbar-brand-text">ESPORTS</h3> */}
                </Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#" className="nav-link-text" onClick={ () => redirectToHome() }>Home</Nav.Link>
                <Nav.Link href="#" className="nav-link-text">Stats</Nav.Link>
                <Nav.Link href="#" className="nav-link-text">How It Works</Nav.Link>
                <Nav.Link href="#" className="nav-link-text" onClick={ () => redirectToDevs() }>Devs</Nav.Link>
                </Nav>
                <Link to="/play">
                    <Button variant="primary">Play Now</Button>
                </Link>
            </Navbar>
        </>
    )
}

export default NavBar;