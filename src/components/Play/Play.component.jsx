import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavBar from "../NavBar/NavBar.component";
import controller from "../../assets/controller.png";

import "./Play.style.css";

const Play = () => {
    const [venue, setVenue] = useState("");
    const [batTeam, setBatTeam] = useState("");
    const [bowlTeam, setBowlTeam] = useState("");
    const [batsman, setBatsman] = useState("");
    const [bowler, setBowler] = useState("");
    const [runs, setRuns] = useState("");
    const [wickets, setWickets] = useState("");
    const [overs, setOvers] = useState("");
    const [striker, setStriker] = useState("");
    const [nonStriker, setNonStriker] = useState("");

    var scores = [];

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = {
            "venue": venue,
            "bat_team": batTeam,
            "bowl_team": bowlTeam,
            "batsman": batsman,
            "bowler": bowler,
            "runs": runs,
            "wickets": wickets,
            "overs": overs,
            "striker": striker,
            "non_striker": nonStriker,
        };
        
        axios.post("http://127.0.0.1:8000/predict", formData, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            // console.log(response.data)
            return response.data;
        })
        .then((data) => {
            // console.log(data.Total_Score);
            scores.push(data.Total_Score);
            console.log("Player score: ", scores);
        })
        .catch((error) => {
            console.log(error);
        });

        clear();
    }

    const clear = () => {
        setVenue("");
        setBatTeam("");
        setBowlTeam("");
        setBatsman("");
        setBowler("");
        setRuns("");
        setWickets("");
        setOvers("");
        setStriker("");
        setNonStriker("");
    }

    return(
        <div className="play">
            <NavBar />
            <Container className="form">
                <Row className="d-flex justify-content-around">
                    <Col>
                        <Card>
                            <Card.Header className="text-center">
                                Player 1 &nbsp;&nbsp;&nbsp;
                                <Image src={ controller } className="player-img" />
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group>
                                        <Form.Label htmlFor="venue">Venue</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Venue"
                                                      onChange={ (e) => { 
                                                                    e.preventDefault();
                                                                    setVenue(e.target.value)
                                                                } }
                                        />
                                        <Form.Label htmlFor="batTeam" className="pt-3">Batting Team</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Batting Team"
                                                      onChange={ (e) => { 
                                                                    e.preventDefault();
                                                                    setBatTeam(e.target.value)
                                                                } }
                                        />
                                        <Form.Label htmlFor="bowlTeam" className="pt-3">Bowling Team</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Bowling Team"
                                                      onChange={ (e) => {
                                                                    e.preventDefault();
                                                                    setBowlTeam(e.target.value);
                                                                } }
                                        />
                                        <Form.Label htmlFor="batsman" className="pt-3">Batsman</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Batsman"
                                                      onChange={ (e) => {
                                                                    e.preventDefault();
                                                                    setBatsman(e.target.value);
                                                                } }
                                        />
                                        <Form.Label htmlFor="bowler" className="pt-3">Bowler</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Bowler"
                                                      onChange={ (e) => {
                                                                    e.preventDefault();
                                                                    setBowler(e.target.value);
                                                                } }
                                        />
                                        <Form.Label htmlFor="runs" className="pt-3">Runs</Form.Label>
                                        <Form.Control 
                                                      placeholder="Runs"
                                                      onChange={ (e) => {
                                                                    e.preventDefault();
                                                                    setRuns(e.target.value);
                                                                } }
                                        />
                                        <Form.Label htmlFor="wickets" className="pt-3">Wickets</Form.Label>
                                        <Form.Control 
                                                      placeholder="Wickets"
                                                      onChange={ (e) => {
                                                                    e.preventDefault();
                                                                    setWickets(e.target.value);
                                                                } }
                                        />
                                        <Form.Label htmlFor="overs" className="pt-3">Overs</Form.Label>
                                        <Form.Control 
                                                      placeholder="Overs"
                                                      onChange={ (e) => {
                                                                    e.preventDefault();
                                                                    setOvers(e.target.value);
                                                                } }
                                        />
                                        <Form.Label htmlFor="striker" className="pt-3">Striker</Form.Label>
                                        <Form.Control 
                                                      placeholder="Striker"
                                                      onChange={ (e) => {
                                                                    e.preventDefault();
                                                                    setStriker(e.target.value);
                                                                } }
                                        />
                                        <Form.Label htmlFor="nonStriker" className="pt-3">Non-Striker</Form.Label>
                                        <Form.Control 
                                                      placeholder="Non-Striker"
                                                      onChange={ (e) => {
                                                                    e.preventDefault();
                                                                    setNonStriker(e.target.value);
                                                                } }
                                        />
                                    </Form.Group>
                                    <div className="submit-btn">
                                        <Button variant="primary" onClick={ (e) => handleSubmit(e) }>Submit!</Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header className="text-center">
                                Player 2 &nbsp;&nbsp;&nbsp;
                                <Image src={ controller } className="player-img" />
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group>
                                        <Form.Label htmlFor="venue">Venue</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Venue"
                                                      onChange={ (e) => { 
                                                                    e.preventDefault();
                                                                    setVenue(e.target.value)
                                                                } }
                                        />
                                        <Form.Label htmlFor="batTeam" className="pt-3">Batting Team</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Batting Team"
                                                      onChange={ (e) => { 
                                                                    e.preventDefault();
                                                                    setBatTeam(e.target.value)
                                                                } }
                                        />
                                        <Form.Label htmlFor="bowlTeam" className="pt-3">Bowling Team</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Bowling Team"
                                                      onChange={ (e) => {
                                                                    e.preventDefault();
                                                                    setBowlTeam(e.target.value);
                                                                } }
                                        />
                                        <Form.Label htmlFor="batsman" className="pt-3">Batsman</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Batsman"
                                                      onChange={ (e) => {
                                                                    e.preventDefault();
                                                                    setBatsman(e.target.value);
                                                                } }
                                        />
                                        <Form.Label htmlFor="bowler" className="pt-3">Bowler</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Bowler"
                                                      onChange={ (e) => {
                                                                    e.preventDefault();
                                                                    setBowler(e.target.value);
                                                                } }
                                        />
                                        <Form.Label htmlFor="runs" className="pt-3">Runs</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Runs"
                                                      onChange={ (e) => {
                                                                    e.preventDefault();
                                                                    setRuns(e.target.value);
                                                                } }
                                        />
                                        <Form.Label htmlFor="wickets" className="pt-3">Wickets</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Wickets"
                                                      onChange={ (e) => {
                                                                    e.preventDefault();
                                                                    setWickets(e.target.value);
                                                                } }
                                        />
                                        <Form.Label htmlFor="overs" className="pt-3">Overs</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Overs"
                                                      onChange={ (e) => {
                                                                    e.preventDefault();
                                                                    setOvers(e.target.value);
                                                                } }
                                        />
                                        <Form.Label htmlFor="striker" className="pt-3">Striker</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Striker"
                                                      onChange={ (e) => {
                                                                    e.preventDefault();
                                                                    setStriker(e.target.value);
                                                                } }
                                        />
                                        <Form.Label htmlFor="nonStriker" className="pt-3">Non-Striker</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Non-Striker"
                                                      onChange={ (e) => {
                                                                    e.preventDefault();
                                                                    setNonStriker(e.target.value);
                                                                } }
                                        />
                                    </Form.Group>
                                    <div className="submit-btn">
                                        <Button variant="primary" onClick={ (e) => handleSubmit(e) }>Submit!</Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Play;