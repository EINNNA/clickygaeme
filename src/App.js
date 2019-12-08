import React, { Component } from "react";
import friends from "./pictures.json";
import Wrapper from "./components/Wrapper/Wrapper";
import PictureCard from "./components/PictureCard/PictureCard";

class App extends Component {

  state = {
    friends,
    currentScore: 0,
    highScore: 0,
    currentFriends: [],
  };


  clickReaction = (id) => {
    let clicked = this.state.friends[id];
    if(clicked.clicked){
      this.reset();
    }else{
      clicked.clicked = true;
      let temp = this.state.friends.filter(friend => friend.id !== clicked.id)
      temp.push(clicked)
      temp.sort(() => Math.random() - 0.5);
      this.setState({friends: temp});
      this.handleIncrement();
    }
    // if (!this.state.friends.clicked) {
    //   this.setState({...this.state.friends, clicked: true });
    //   this.handleIncrement();
    // }
    // else {
    //   this.reset();
    // }
  }

  random = () => {
    Math.floor(Math.random() * 17);
  };

  reset = () => {
    this.setState({ score: 0});
  };

  handleIncrement = () => {
    this.setState({ currentScore: this.state.currentScore + 10 })
  };

  highScore = () => {
    if (this.state.currentScore > this.state.highScore) {
      this.setState({ highScore: this.state.currentScore })
    }
  };

  render() {
    return (
      <div>
        <h1>Catch the Animals</h1>
        <h3>Score: {this.state.currentScore}</h3>
        <h3>High Score: {this.state.highScore}</h3>
        {this.state.friends.map(friend => (
          <Wrapper>
            <PictureCard
              key={friend.id}
              id={friend.id}
              clickReaction={this.clickReaction}
              image={friend.image}
            />
          </Wrapper>

        ))}
      </div>
    );
  }

}

export default App;