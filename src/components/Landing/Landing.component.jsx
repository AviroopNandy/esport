import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar.component";
import bg from "../../assets/home-bg.png";
import Button from "react-bootstrap/Button";

import "./Landing.style.css";

const Landing = () => {
    return(
        <div className="home">
            <NavBar />
            <img src={ bg } alt="home background" className="bg" />
            <h3 className="header">Welcome to Esport</h3>
            <p className="text">
                Engage in a fun and interactive Cricket Simulator Game powered 
                by Artificial Intelligence and Machine Learning.
                <br />
                Choose your favorite teams as well as players and set up the 
                parameters of the game. You are in control!
                <br />
                Play against your opponent and find out the winner based on 
                historical data present about previous interactions of the 
                respective teams chosen.
            </p>
            <Link to="/play">
                <Button variant="primary">Play Now</Button>
            </Link>
        </div>
    );
}

export default Landing;