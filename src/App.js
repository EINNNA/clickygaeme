import React, { Component } from "react";
import friends from "./pictures.json";
import Wrapper from "./components/Wrapper/Wrapper";
import PictureCard from "./components/PictureCard/PictureCard";

class App extends Component {

  state = {
    friends,
    currentScore: 0,
    highScore: 17,
    currentFriends: []
  };

  random = () => {
    Math.floor(Math.random() * 17);
  };

handleIncrement = () => {
  this.setState({ currentScore: this.state.currentScore +10 })
}


  removeFriend = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends });
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
              removeFriend={this.removeFriend}
              id={this.random()}
              image={friend.image}
            />
          </Wrapper>

        ))}
      </div>
    );
  }

}

export default App;