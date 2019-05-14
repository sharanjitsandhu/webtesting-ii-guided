import React, { Component } from "react";

import "./App.css";
import Players from "./Players";

class App extends Component {
  state = {
    players: [
      { id: 1, name: "Sam" },
      { id: 2, name: "Bilbo" },
      { id: 3, name: "Frodo" }
    ]
  };
  greet = () => {
    this.setState({ greeting: "Hello WEB 18" });
  };

  render() {
    return (
      <div className="App">
        <h2>Hello World!</h2>
        <div>
          <button onClick={this.greet}>Greet</button>
          <div>{this.state.greeting}</div>
        </div>

        <Players players={this.state.players} />
      </div>
    );
  }
}

export default App;
