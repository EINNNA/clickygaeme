import React from "react";

class Score extends React.Component {
    state = {
        score: 0
    };

    handleIncrement = () => {
        this.setState({ score: this.state.score + 10});
    }

    handleLoss = () => {
        this.setState({ score: this.state.score = 0})
    }

}

export default Score;