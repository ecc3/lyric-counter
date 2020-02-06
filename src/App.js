import React, { Component } from "react";
import { getArtistId } from "./utils";

class App extends Component {
  state = {
    artist: ""
  };

  handleChange = ({ target }) => {
    this.setState({ artist: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    getArtistId(this.state.artist);
  };

  render() {
    return (
      <main>
        <form action="" onSubmit={this.handleSubmit}>
          Artist name:{" "}
          <input
            type="text"
            name="artist"
            value={this.state.artist}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </main>
    );
  }
}

export default App;
