import React, { useEffect, useRef } from "react";
import NavBar from "../NavBar/NavBar.component";
import { QConsumer, QContext } from "../../context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import "./Result.style.css";

var progress = 0, width, isLoaded = false;

const Result = () => {
    // var isLoaded = useRef(false);
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
                    isLoaded = true;
                    console.log(isLoaded);
                } else {
                    width = width + 0.25;
                    element.style.width = width + "%";
                    element.innerHTML = "Analyzing data..." + width + "%";
                }
            }
        }
    }, [isLoaded]);

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
                                        <h3>Player 1</h3>
                                        <h4>Won by <strong>16 </strong> runs</h4>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                ) : null
            }
        </div>
    );
}

export default Result;