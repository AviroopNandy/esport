import React from "react";
import axios from "axios";

const QContext = React.createContext();

class QProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player1Score: 0,
            player2Score: 0,
            winner: "",
            wonByRuns: 0
        };

        this.setPlayer1Score = this.setPlayer1Score.bind(this);
        this.setPlayer2Score = this.setPlayer2Score.bind(this);
        this.determineWinner = this.determineWinner.bind(this);
    }

    setPlayer1Score(formData) {
        console.log(formData);
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
            this.setState({
                player1Score: data.Total_Score
            });
            console.log("Player 1 Score in context.js: ", this.state.player1Score);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    setPlayer2Score(formData) {
        console.log(formData);
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
            this.setState({
                player2Score: data.Total_Score
            });
            console.log("Player 2 Score in context.js: ", this.state.player2Score);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    determineWinner() {
        if(this.state.player1Score > this.state.player2Score) {
            const scoreDifference = Math.round(this.state.player1Score) - Math.round(this.state.player2Score);
            this.setState({
                winner: "Player A",
                wonByRuns: scoreDifference
            });
        }

        else if(this.state.player2Score > this.state.player1Score) {
            const scoreDifference = Math.round(this.state.player2Score) - Math.round(this.state.player1Score);
            this.setState({
                winner: "Player B",
                wonByRuns: scoreDifference
            });
        }

        else {
            this.setState({
                winner: "It's a draw!",
                wonByRuns: 0
            });
        }
    }

    render() {
        return(
            <QContext.Provider
                value={ {
                    ...this.state,
                    setPlayer1Score: this.setPlayer1Score,
                    setPlayer2Score: this.setPlayer2Score,
                    determineWinner: this.determineWinner
                } }
            >
                { this.props.children }
            </QContext.Provider>
        );
    }
}

const QConsumer = QContext.Consumer;

export { QProvider, QConsumer, QContext };