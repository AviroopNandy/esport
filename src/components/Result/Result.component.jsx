import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../NavBar/NavBar.component";
import { QConsumer } from "../../context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./Result.style.css";

var progress = 0, width;

const Result = () => {
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false);

    const handleClick = () => {
        history.push("/stats");
    }

    useEffect(() => {
        if(progress === 0) {
            progress = 0.25;
            var element = document.getElementById("bar");
            width = 0.5;
            var id = setInterval(frame, 10);
            function frame() {
                if(width >= 100) {
                    clearInterval(id);
                    progress = 0;
                    setIsLoaded(true);
                    console.log(isLoaded);
                } else {
                    width = width + 0.25;
                    element.style.width = width + "%";
                    element.innerHTML = "Analyzing data..." + width + "%";
                }
            }
        }
    }, []);

    return(
        <QConsumer>
            { value => {
                const { player1Score, player2Score, winner, wonByRuns } = value;
                return(
                    <div className="result">
                        <NavBar />
                        {/* <div className="pb-3 text-center">
                            { isLoaded ? (
                                <h5>Data Analyzed!!!</h5>
                                ) : (
                                <h5>Analyzing data...</h5>
                                )
                            }
                        </div> */}
                        <div className="progress text-center">
                            <div className="bar" id="bar"></div>
                        </div>
                        { isLoaded ? (
                            <div className="winner">
                                <Container>
                                    <Row className="d-flex justify-content-center">
                                        <Col>
                                            <Card>
                                                <Card.Header className="text-center">
                                                    <h2>WINNER!!!</h2>
                                                </Card.Header>
                                                <Card.Body className="text-center">
                                                    <h3>{ winner }</h3>
                                                    <h4>Won by <strong>{ wonByRuns } </strong> runs</h4>
                                                    <div className="score">
                                                        <Card>
                                                            <Card.Body>
                                                                <h4>Player A Score: { Math.round(player1Score) }</h4>
                                                            </Card.Body>
                                                        </Card>
                                                        <Card>
                                                            <Card.Body>
                                                                <h4>Player B Score: { Math.round(player2Score) }</h4>
                                                            </Card.Body>
                                                        </Card>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row className="pt-4 d-flex justify-content-center">
                                        <Col className="pt-4 d-flex justify-content-center">
                                            <Button onClick={ () => { handleClick() } }>See Stats</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            ) : null
                        }
                    </div>
                );
            } }
        </QConsumer>
    );
}

export default Result;