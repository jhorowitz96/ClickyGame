import React, { Component } from "react";
import FriendCard from "./components/FriendCard/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Header from "./components/Header"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedFriendIDs: [],
    score: 0,
    target: 12,
    status: ""
  };


  shuffleFriends = id => {
    let clickedFriendIDs = this.state.clickedFriendIDs;

    if (clickedFriendIDs.includes(id)) {
      this.setState({
        clickedFriendIDs: [],
        score: 0,
        status: "Try Again!"
      });
      return;
    } else {
      clickedFriendIDs.push(id)
    }

    if (clickedFriendIDs.length === 12) {
      this.setState({
        score: 12,
        status: "You Won!",
        clickedFriendIDs: []
      });
      alert("You got the whole office. Wanna play again?")
      return;
    }

    this.setState({ friends, clickedFriendIDs, score: clickedFriendIDs.length, status: " " });

    var i = 0, j = 0, temp = null

    for (i = friends.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = friends[i]
      friends[i] = friends[j]
      friends[j] = temp
    }

  }


  Score = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header>
        <p style={{textAlign: "center", color: "white"}}>Don't click a photo more than once. Try and get all 12 Dunder Mifflinites!</p>
          <h4 style={{textAlign: "center", color: "white"}}>Score: {this.state.score} | Top Score: {this.state.topScore}</h4>
          {/* <h5 style={{textAlign: "center", color: "white"}}>{this.state.status}</h5> */}
        </Header>
        <Title>The Office Memory Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleFriends={this.shuffleFriends}
            id={friend.id}
            key={friend.id}
            // name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

