import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    clicked: [],
    score: 0,
    hiScore: 0,
    message: "Click on a picture to begin!"
  };

  handleShuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  handleClick = (id) => {
    // alert(id);
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState(
        {
          friends: friends,
          clicked: this.state.clicked.concat(id),
          score: this.state.score + 1,
          hiScore: (this.state.hiScore > this.state.score) ? this.state.hiScore : this.state.hiScore + 1,
          message: "Correct!"
        }
      );
    } else {
      this.setState(
        {
          friends: friends,
          clicked: [],
          score: 0,
          topScore: (this.state.score > this.state.hiScore) ? this.state.score : this.state.hiScore,
          message: "Wrong!"
        }
      );
    }
    this.handleShuffleArray(friends);
  }

  // Map over this.state.friends and render a component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav
          brand="Clicky Game"
          message={this.state.message}
          score={this.state.score}
          hiScore={this.state.hiScore}
        />
        <Title subtitle="Click on the picture to earn points, but don't click on it twice!">Clicky Game</Title>
        {this.state.friends.map(friends => (
          <FriendCard
            handleClick={this.handleClick}
            id={friends.id}
            key={friends.id}
            message={this.state.message}
            image={friends.image}
            score={this.state.score}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
