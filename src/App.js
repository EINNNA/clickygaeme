import React, { Component } from "react";
import friends from "./pictures.json";
import Wrapper from "./components/Wrapper/Wrapper";
import PictureCard from "./components/PictureCard/PictureCard";

var currentScore = [];
var highScore = [];
var currentFriends = [];

class App extends Component {

    state = {
        friends
    };

    random = () => {
        Math.floor(Math.random() * 17);
    };



    removeFriend = id => {
        const friends = this.state.friends.filter(friend => friend.id !== id);
        this.setState({ friends });
      };
    
      render() {
        return (
          <H1>Catch the Animals</H1>
          <H3>Score: {this.</H3>
            {this.state.friends.map(friend => (
              <PictureCard
                key={friend.id}
                removeFriend={this.removeFriend}
                id={this.random()}
                image={friend.image}
              />
            ))}
        );
      }
    
}

export default App;