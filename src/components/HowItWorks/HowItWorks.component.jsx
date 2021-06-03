import React from "react";
import NavBar from "../NavBar/NavBar.component";
import image from "../../assets/how-it-works.png";
import Container from "react-bootstrap/Container";

import "./HowItWorks.style.css";

const HowItWorks = () => {
    return(
        <div className="works">
            <NavBar />
            <Container>
                <div className="image">
                    <img src={ image } className="img" alt="" />
                </div>
                <div className="desc">
                    <h2 className="pb-3 text-center"><strong>Powered by AI</strong></h2>
                        <p>
                            "<strong>Esport</strong>" is powered by Machine Learning Technologies coupled with a simple 
                            and interactive UI. The Model is trained on previous match data and predicts the total score 
                            of an innings. We have utilised Supervised Learning Algorithms like Multivariate Linear 
                            Regression, Decision Tree Regressor as well as Random Forest Regressor and run multiple tests 
                            to choose the most suitable model with the best accuracy. We utilised the official ODI 
                            (One Day International) Dataset provided by the ICC (International Cricket Council) which has 
                            match details about all international games played during 2006-2017. 
                            <br /><br />
                            We have presented the ML Model in the form of a simulator game through which the user can interact 
                            with it in a fun and engaging manner.
                            <br /><br />
                            Two players can compete against each other, choosing their teams, star players and suggest in 
                            game scenarios to predict the winner of the game.
                            <br /><br />
                            Finally we have also provided the user with insightful visualisations showing how parameters 
                            such as total runs scored, wickets taken depend on the number of overs bowled, We have also 
                            showed stats based on average runs scored by a team in an ODI game as well as Wickets taken 
                            over the course of 50 overs.
                        </p>
                </div>
            </Container>
        </div>
    );
}

export default HowItWorks;