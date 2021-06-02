import React from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../NavBar/NavBar.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import wickets from "../../assets/wickets.jpeg";
import runs from "../../assets/runs.jpeg";
import avgWickets from "../../assets/total_wickets_avg.jpeg";
import avgRuns from "../../assets/total_runs_avg.jpeg";

import "./Stats.style.css";

const Stats = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/play");
    }
    return(
        <div className="stats">
            <NavBar />
            <Container>
                <Row className="pt-2 pb-3 d-flex justify-content-around">
                    <Col className="d-flex flex-column text-center justify-content-center">
                        <h4>Total vs Wickets in particular over</h4>
                        <img src={ wickets } className="image" alt="wickets" />
                    </Col>
                    <Col className="d-flex flex-column text-center justify-content-center">
                        <h4>Total Wickets taken on Average</h4>
                        <img src={ avgWickets } className="image" alt="wickets" />
                    </Col>
                </Row>
                <Row className="pt-3 pb-2 d-flex justify-content-around">
                    <Col className="d-flex flex-column text-center justify-content-center">
                        <h4>Total vs Runs in particular over</h4>
                        <img src={ runs } className="image" alt="wickets" />
                    </Col>
                    <Col className="d-flex flex-column text-center justify-content-center">
                        <h4>Total Runs taken on Average</h4>
                        <img src={ avgRuns } className="image" alt="wickets" />
                    </Col>
                </Row>
                <Row className="pt-4 d-flex justify-content-center">
                    <Col className="d-flex justify-content-center">
                        <Button onClick={ () => { handleClick() } }>Play Again</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Stats;