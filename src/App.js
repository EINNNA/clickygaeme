import React, { Component } from "react";
import friends from "./pictures.json";
import Wrapper from "./components/Wrapper/Wrapper";
import PictureCard from "./components/PictureCard/PictureCard";

class App extends Component {

  state = {
    friends,
    currentScore: 0,
    highScore: 0
  };


  clickReaction = (id) => {
    let clickedFriend;

    const friendsCopy = this.state.friends.map(friend => {
      if (friend.id === id)
        clickedFriend = friend;

      return friend;
    });
    
    if(clickedFriend.clicked){
      this.reset();
    } else {
      clickedFriend.clicked = true;
      friendsCopy.sort(() => Math.random() - 0.5);
      this.setState({friends: friendsCopy});
      this.handleIncrement();
    };
  };

  reset = () => {
    if (this.state.currentScore > this.state.highScore)
      this.setState({ highScore: this.state.currentScore })
    const friendsCopy = this.state.friends;

    const resettedFriends = friendsCopy.map(friend => {
      friend.clicked = false;
      return friend;
    });

    this.setState({ currentScore: 0, friends: resettedFriends});
  };

  handleIncrement = () => {
    this.setState({ currentScore: this.state.currentScore + 10 });
  };

  render() {
    return (
      <div>
        <h1>Catch the Animals</h1>
        <h3>Score: {this.state.currentScore}</h3>
        <h3>High Score: {this.state.highScore}</h3>
        {this.state.friends.map(friend => (
          <div style={{display: "inline-block"}} key={friend.id}>
            <Wrapper>
              <PictureCard
                id={friend.id}
                clickReaction={this.clickReaction}
                image={friend.image}
              />
              {friend.id}
            </Wrapper>
          </div>
        ))}
      </div>
    );
  }

}

export default App;